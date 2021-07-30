import * as express from "express";
import { ValidationError } from "../common/http-exception";
import validateSchema from "../validation/book.validation";
import BaseController from "./base.controller";
import Joi from "joi";
import { BookService } from "../service/book.service";

class BookController extends BaseController {
    bookService: BookService;

    constructor() {
        super();
        this.bookService = new BookService();
        this.initializeRoutes();
    }

    getBook(req: express.Request, res: express.Response, next: express.NextFunction) {
        const id = req.params.id;
        validateSchema.validateAsync(id).then((ValidatedBook) => {
            this.bookService.getBook(ValidatedBook).then((book) => {
                return res.status(200).send(book);
            })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }

    addBook(req: express.Request, res: express.Response, next: express.NextFunction) {
        const { body } = req;
        validateSchema.validateAsync(body).then((ValidatedBook) => {
            this.bookService.addBook(ValidatedBook).then((book) => {
                return res.status(200).send(book);
            })
                .catch((err) => {
                    next(err);
                });

        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            });
    }

    deleteBook(req: express.Request, res: express.Response, next: express.NextFunction) {
        const id = req.params.id;
        validateSchema.validateAsync(id).then((ValidatedBook) => {
            this.bookService.deleteBook(ValidatedBook).then((book) => {
                return res.status(200).send(book);
            })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }

    updateBook(req: express.Request, res: express.Response, next: express.NextFunction) {
        const { body } = req;
        validateSchema.validateAsync(body).then((ValidatedBook) => {
            this.bookService.updateBook(ValidatedBook).then((book) => {
                return res.status(200).send(book);
            })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }

    getAllBooks(req: express.Request, res: express.Response, next: express.NextFunction) {
        return this.bookService.getAllBooks().then((list) => res.status(200).send(list));
    }

    initializeRoutes() {
        this.router.get("/", this.getBook.bind(this));
        this.router.post("/", this.addBook.bind(this));
        this.router.delete("/:id", this.deleteBook.bind(this));
        this.router.put("/:id", this.updateBook.bind(this))
    }
}

const bookController = new BookController();
export default bookController.router