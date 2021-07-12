export default interface GetBookList {
    id: number | null;
    bookName: string;
    bookPage: number;
    bookGenre: string;
    bookAuthor: string;
    bookPrice: number;
}

export default interface AddBook {
    bookName: string;
    bookPage: number;
    bookGenre: string;
    bookAuthor: string;
    bookPrice: number;
}

export default interface UpdateBook {
    bookName: string;
    bookPage: number;
    bookGenre: string;
    bookAuthor: string;
    bookPrice: number;
}

export default interface DeleteBook {
    id: number | null;
    bookName: string;
    bookPage: number;
    bookGenre: string;
    bookAuthor: string;
    bookPrice: number;
}