import express from 'express';
import cors from 'cors';
import Router from './router.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(Router);

app.listen(PORT, (err) => {
    if(err){return console.log(err);}
    console.log('Сервер запущен на порту', PORT);
});