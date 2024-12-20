import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './db.js';
import pkg from 'jsonwebtoken';
import { hash } from 'bcrypt';

const { sign } = pkg;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const initializeTestDb = () => {
    const sql = fs.readFileSync(path.resolve(__dirname, "../SQL/todo.sql"), "utf8");
    pool.query(sql);
};

const insertTestUser = (email, password) => {
    hash(password, 10, (error, hashedPassword) => {
        pool.query('INSERT INTO account (email, password) VALUES ($1, $2)', [email, hashedPassword]);
    });
};

const getToken = (email) => {
    return sign({ user: email }, process.env.JWT_SECRET_KEY);
};

export { initializeTestDb, insertTestUser, getToken };