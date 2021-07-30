import { BookList, AddBook, UpdateBook } from "../db/book.interface";
import KnexDB from "../db/knex";
import { DatabaseError, BookNotFound } from "../common/http-exception";

class BookRepository {

    bookDb: typeof KnexDB;

    constructor() {
        this.bookDb = KnexDB;
    }

    async addBook(book: AddBook): Promise<AddBook> {
        return new Promise(async (resolve, reject) => {
            this.bookDb.db("book").insert({ name: book.name, page: book.page, genre: book.genre, author: book.author, })
                .returning("*").then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        });
    }

    async getBook(): Promise<BookList> {
        return new Promise(async (resolve, reject) => {
            this.bookDb.db.select("id", "bookName", "bookPage", "bookGenre", "bookAuthor",)
                .from("book")
                .then((result) => {
                    resolve(result[1]);
                })
                .catch((error) => {
                    reject(new BookNotFound(error));
                })
        })
    }

    async updateBook(book: UpdateBook): Promise<BookList> {
        return new Promise(async (resolve, reject) => {
            const bookupdating = book;
            this.bookDb.db("book")
                .where("book.bookid", book.bookId)
                .update(bookupdating, ["bookid", "bookname", "bookpage", "bookgenre", "bookauthor"])
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError())
                })
        })
    }

    async deleteBook(id: number): Promise<Boolean> {
        return new Promise(async (resolve, reject) => {
            this.bookDb.db("book").where("book.bookid", id).del()
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

    async getAllBooks(): Promise<BookList> {
        return new Promise(async (resolve, reject) => {
            this.bookDb.db
                .select("id", "bookName", "bookGenre", "bookAuthor")
                .from("game")
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

}

export default BookRepository;