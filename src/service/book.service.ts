import BookRepository from "../repository/book.repository";
import { AddBook, BookList, UpdateBook } from "../db/book.interface";
import { Book } from "../db/bookinterface2";



export class BookService {

    bookrepository: BookRepository;

    constructor() {
        this.bookrepository = new BookRepository();
    }

    async getBook(id: number): Promise<BookList> {
        return new Promise((resolve, reject) => {
            this.bookrepository
                .getBook()
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async addBook(book: AddBook): Promise<AddBook> {
        return new Promise((resolve, reject) => {
            this.bookrepository
                .addBook(book)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async deleteBook(id: number): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            this.bookrepository
                .deleteBook(id)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async updateBook(book: UpdateBook): Promise<BookList> {
        return new Promise((resolve, reject) => {
            this.bookrepository
                .updateBook(book)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async getAllBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            this.bookrepository.getAllBooks()
                .then((result) => {
                    return resolve(result);
                })
                .catch((error) => {
                    return reject(error);
                })
        })
    }




}