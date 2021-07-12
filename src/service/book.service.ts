import BookRepository from "../repository/book.repository";
import AddBook  from "../db/dto";
import UpdateBook  from "../db/dto";
import DeleteBook  from "../db/dto";
import GetBookList from "../db/dto";

export class BookService {

    async getBook(id: number): Promise<GetBookList> {
        return new Promise((resolve, reject) => {
            this.bookRepository.getBook(id)
            .then((res) => {
                return resolve(res);
            })
            .catch((err)=>{
            reject(err);
            });
        });
    }

    async addBook(book: AddBook): Promise<AddBook> {
        return new Promise((resolve, reject) => {
            this.bookRepository.addBook(book)
            .then((res) => {
                return resolve(res);
            })
            .catch((err)=>{
            reject(err);
            });
        });
    }

    async deleteBook(id: number): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            this.bookRepository.deleteBook(id).then((res) => {
                return resolve(res);
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    }



    
}