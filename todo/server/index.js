import express from 'express';
import cors from 'cors';
import todoRouter from './routes/todoRouter.js';

const port = process.env.PGPORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', todoRouter);
app.listen(port);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message });
});