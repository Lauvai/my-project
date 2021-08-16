import { knex, Knex } from "knex";
import config from "../config";

export class KnexDB {
    config: Knex.Config = {
        client: "pg",
        connection: config.POSTGRES_URL,
        pool: {
            min: 1,
            max: 5
        },

    }
    
    db = knex(this.config)
    
    constructor() {
        console.log("Knex init started");
    }

    init(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {

            const resultx = this.db.raw("select 1=1");
            console.log("result: " + resultx);
            resolve(true);
        }),
    }
}

export default new KnexDB;