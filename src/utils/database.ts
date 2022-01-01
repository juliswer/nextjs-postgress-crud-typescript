import {Pool} from 'pg';
require("dotenv").config();

let conn: any;

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE
} = process.env;

if (!conn) {
    conn = new Pool({
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: Number(DB_PORT),
        database: DB_DATABASE,
    })
}

export {conn};