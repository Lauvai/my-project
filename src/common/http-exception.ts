export class HttpException extends Error {
    status: number;
    message: string;
    status_code: number;

    constructor(status: number, message: string, statusCode: number) {
        super(message);
        this.status = status;
        this.message = message;
        this.status_code = statusCode;

    }
}

export class DatabaseError extends HttpException {
    constructor(message?: string) {
        super(500, message || "Something went wrong", 100);
    }
}

export class BookNotFound extends HttpException {
    constructor(message?: string) {
        super(404, message || "Cannot find the book", 101);
    }
}

export class ValidationError extends HttpException {
    constructor(message?: string) {
        super(500, message || "Validation error", 102);
    }
}