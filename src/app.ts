import express from "express";
import errorHandler from "./middleware/error.middleware";
import BookController from "./controller/book.controller";
import cors from "cors";
import KnexDB from "./db/knex";

class BookApp{
    app : express.Application;
    approuter : express.Router;
    constructor(){
        this.app = express();
        this.approuter = express.Router();
    }

    init(){
        return new Promise((resolve, reject) => {
            try{
                this.app.appConfig();
                this.app.routeConfig();
            }
            catch(error){
                console.log(error);
            }
            finally{
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
        this.approuter.use("/", BookController);
    }

    listen(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const port = Number(process.env.APP_PORT || 3000);
            this.app.listen(port, () => {
                console.log("Express server started on port: " + port);
                resolve(true);
            });
        });
    }
}

const app = new BookApp();

export default app;