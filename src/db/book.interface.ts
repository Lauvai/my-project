export interface BookList {
    Book: [];

}

export interface AddBook {
    name: string;
    page: number;
    genre: string;
    author: string;
}


export interface UpdateBook {
    bookId: number;
    bookName: string;
    bookPage: number;
    bookGenre: string;
    bookAuthor: string;
}

