import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
// import Connection from './src/database/db.js';
// import Router from './src/routes/route.js';


dotenv.config();

// const app = express();

// app.use(cors());
// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/');


const PORT = 8000;
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT  ${PORT}`));