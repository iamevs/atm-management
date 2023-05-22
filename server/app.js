import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
import cors from 'cors';
const port = 8001;

import connection from './Database.js';

app.use(cors());



app.listen(port, () => console.log(`App listening on port ${port}!`));

// routes

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/selectuser/:accno', (req, res) => {
    const accno = req.params.accno;
  
    connection.query('SELECT * FROM card WHERE accno = ?', [accno], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.json(results);
      }
    });
  });