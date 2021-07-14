import BookRepository from "../repository/book.repository";
import { BookList } from "../db/book.interface";

export class BookService {

    async getBook(id: number): Promise<BookList> {
        return new Promise((resolve, reject) => {
            this.bookRepository
            .getBook(id)
            .then((res) => {
                return resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }

    async addBook(book: BookList): Promise<BookList> {
        return new Promise((resolve, reject) => {
            this.bookRepository
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
            this.bookRepository
            .deleteBook(id)
            .then((res) => {
                return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async updateBook(book: BookList): Promise<BookList> {
        return new Promise((resolve, reject) => {
            this.bookRepository
            .updateBook(book)
            .then((res) => {
                return resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }



    
}