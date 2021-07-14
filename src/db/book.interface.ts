export interface BookList {
    id: number | null;
    bookName: string;
    bookPage: number;
    bookGenre: string;
    bookAuthor: string;
    bookPrice: number;
    
}


 export const books: BookList[] = [
        {
            id: 1,
            bookName: 'Fahrenheit 451',
            bookAuthor: 'Ray Bradbury',
            bookGenre: 'Science Fiction, Dystopia',
            bookPage: 208,
            bookPrice: 30.00
        },

        {
            id: 2,
            bookName: 'Sadist',
            bookAuthor: 'Stephen King',
            bookGenre: 'Horror',
            bookPage: 344,
            bookPrice: 45.00
        },

        {
            id: 3,
            bookName: 'Cesur Yeni Dünya',
            bookAuthor: 'Aldous Huxley',
            bookGenre: 'Science Fiction, Dystopia',
            bookPage: 349,
            bookPrice: 30.00
        },

        {
            id: 4,
            bookName: 'Vakıf',
            bookAuthor: 'Isaac Asimov',
            bookGenre: 'Science Fiction',
            bookPage: 304,
            bookPrice: 42.00
        },

        {
            id: 5,
            bookName: 'Watchmen',
            bookAuthor: 'Alan Moore, Dave Giboons',
            bookGenre: 'Comics',
            bookPage: 448,
            bookPrice: 99.00
        },

        {
            id: 6,
            bookName: 'Yüzüklerin Efendisi Tek Cilt',
            bookAuthor: 'J.R.R. Tolkien',
            bookGenre: 'Fantasy',
            bookPage: 1291,
            bookPrice: 185.00
        }, 
        
        {
            id: 7,
            bookName: 'Psikiyatrist',
            bookAuthor: 'Wulf Dorn',
            bookGenre: 'Thriller',
            bookPage: 416,
            bookPrice: 37.49
        },

        {
            id: 8,
            bookName: 'Batman: İlk Yıl',
            bookAuthor: 'Frank Miller, DAvid Mazzucchelli',
            bookGenre: 'Comics, Graphic Novels',
            bookPage: 144 ,
            bookPrice: 45.08
        },

        {
            id: 9,
            bookName: 'Aklından Bir Sayı Tut',
            bookAuthor: 'John Verdon',
            bookGenre: 'Mystery, Thriller',
            bookPage: 475,
            bookPrice: 38.00
        },

        {
            id: 10,
            bookName: 'Dune',
            bookAuthor: 'Frank Herbert',
            bookGenre: 'Science Fiction',
            bookPage: 712,
            bookPrice: 65.00
        },
    ];