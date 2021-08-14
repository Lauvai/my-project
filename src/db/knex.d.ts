import Knex from "knex"

declare module "knex"{
    interface QueryBuilder{
        customSelect<TRecord, TResult>(value: number): QueryBuilder<TRecord, TResult>
    }
}