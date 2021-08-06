import { BookList, AddBook, UpdateBook } from "../db/book.interface";
import { Book } from "../db/bookinterface2";
import KnexDB from "../db/knex";
import { DatabaseError, BookNotFound } from "../common/http-exception";

class BookRepository {

    bookDb: typeof KnexDB;

    constructor() {
        this.bookDb = KnexDB;
    }

    async addBook(book: AddBook): Promise<AddBook> {
        return new Promise(async (resolve, reject) => {
            this.bookDb.db("book").insert(book)
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
                .from("book").where("id", 1)
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new BookNotFound(error));
                })
        })
    }

    async updateBook(book: UpdateBook): Promise<BookList> {
        return new Promise(async (resolve, reject) => {
            this.bookDb.db("book")
                .where("book.bookid", book.bookId)
                .update(book, ["bookid", "bookname", "bookpage", "bookgenre", "bookauthor"])
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

    async getAllBooks(): Promise<Book[]> {
        return new Promise(async (resolve, reject) => {
            this.bookDb.db
                .select("id", "bookName", "bookGenre", "bookAuthor", "bookPage")
                .from("book").groupBy("id")
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

}

export default BookRepository;