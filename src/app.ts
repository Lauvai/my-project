import express from "express";
import errorHandler from "./middleware/error.middleware";
import BookController from "./controller/book.controller";
import cors from "cors";

class BookApp {
    app: express.Application;
    approuter: express.Router;
    constructor() {
        this.app = express();
        this.approuter = express.Router();
        this.init();
    }

    init() {
        return new Promise((resolve, reject) => {
            try {
                this.appConfig();
                this.routeConfig();
                resolve(true);
            }
            catch (error) {
                console.log(error);
                reject(error);
                process.exit(1);
            }
            finally {
                this.app.use(errorHandler);
            }
        });
    }

    private appConfig() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routeConfig() {
        const apiPath: string = "/api"
        this.app.use(apiPath, this.approuter);
        this.approuter.use("/books", BookController);
    }

    listen(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const port = Number(process.env.APP_PORT || 3300);
            this.app.listen(port, () => {
                console.log("Express server started on port: " + port);
                resolve(true);
            });
        });
    }
}

const app = new BookApp();

export default app;