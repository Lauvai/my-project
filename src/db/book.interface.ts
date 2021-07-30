export interface BookList {
    id: number | null;
    bookName: string;
    bookPage: number;
    bookGenre: string;
    bookAuthor: string;

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

