import pkg from 'pg';
import dotenv from 'dotenv';

const enviroment = process.env.NODE_ENV;
dotenv.config();

const { Pool } = pkg;

const openDb = () => {
    const pool = new Pool ({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: enviroment === 'development' ? process.env.PGDATABASE : process.env.TEST_DB_NAME,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT
    })
    return pool;
}

const pool = openDb();

export { pool };