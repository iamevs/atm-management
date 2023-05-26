import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
import cors from 'cors';
const port = 8001;

import connection from './Database.js';
import bodyParser from 'body-parser';




app.use(cors());
app.use(bodyParser.json());



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

// app.post('/withdraw/:accno', (req, res) => {
//   const accno = req.params.accno;
//   const amt = req.body.amt;

//   connection.query('SELECT balance FROM card WHERE accno = ?', [accno], (error, results) => {
//     console.log("amount in server : ", amt);
//     if (error) {
//       console.error('Error executing query:', error);
//       res.status(500).json({ error: 'An error occurred' });
//     } else {
//       if (results.length > 0) {
//         const balance = results[0].balance;
//         console.log("balance in server : ", balance);
//         console.log("amount in server : ", amt);
//         if (balance >= amt) {
//           console.log("inside if")
//           connection.query('UPDATE card SET balance = balance - ? WHERE accno = ?', [amt, accno], (error, results) => {
//             if (error) {
//               console.error('Error executing query:', error);
//               res.status(500).json({ error: 'An error occurred' });
//             } else {
//               console.log('Withdrawal successful');
//             }
//           });
//         } else {
//           res.status(400).json({ error: 'Insufficient balance' });
//         }
//       } else {
//         res.status(404).json({ error: 'Account not found' });
//       }
//     }
//   });
// });


// app.post('/deposit/:accno', (req, res) => {
//   const accno = req.params.accno;
//   const amount = req.body.amount;

//   connection.query('SELECT balance FROM card WHERE accno = ?', [accno], (error, results) => {
//     console.log("amount in server : ", amount);
//     if (error) {
//       console.error('Error executing query:', error);
//       res.status(500).json({ error: 'An error occurred' });
//     } else {
//       if (results.length > 0) {
//         const balance = results[0].balance;
//         if (amount > 0) {
//           connection.query('UPDATE card SET balance = balance + ? WHERE accno = ?', [amount, accno], (error, results) => {
//             if (error) {
//               console.error('Error executing query:', error);
//               res.status(500).json({ error: 'An error occurred' });
//             } else {
//               console.log('Deposit successful');
//             }
//           });
//         } else {
//           res.status(400).json({ error: 'Enter the amount' });
//         }
//       } else {
//         res.status(404).json({ error: 'Account not found' });
//       }
//     }
//   });
// });


app.post('/withdraw/:accno', (req, res) => {
  const accno = req.params.accno;
  const amt = req.body.amt;

  connection.query('SELECT balance, cardno FROM card WHERE accno = ?', [accno], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      if (results.length > 0) {
        const balance = results[0].balance;
        const cardno = results[0].cardno;
        if (balance >= amt) {
          connection.beginTransaction((err) => {
            if (err) {
              console.error('Error starting transaction:', err);
              res.status(500).json({ error: 'An error occurred' });
              return;
            }

            connection.query('UPDATE card SET balance = balance - ? WHERE accno = ?', [amt, accno], (error, results) => {
              if (error) {
                console.error('Error executing query:', error);
                connection.rollback(() => {
                  res.status(500).json({ error: 'An error occurred' });
                });
              } else {
                connection.query(
                  'INSERT INTO transaction (cardno, transtype, amt, date, time) VALUES (?, ?, ?, CURDATE(), CURTIME())',
                  [cardno, 'withdraw', amt],
                  (error, results) => {
                    if (error) {
                      console.error('Error executing query:', error);
                      connection.rollback(() => {
                        res.status(500).json({ error: 'An error occurred' });
                      });
                    } else {
                      connection.commit((err) => {
                        if (err) {
                          console.error('Error committing transaction:', err);
                          connection.rollback(() => {
                            res.status(500).json({ error: 'An error occurred' });
                          });
                        } else {
                          console.log('Withdrawal successful');
                          res.status(200).json({ message: 'Withdrawal successful' });
                        }
                      });
                    }
                  }
                );
              }
            });
          });
        } else {
          res.status(400).json({ error: 'Insufficient balance' });
        }
      } else {
        res.status(404).json({ error: 'Account not found' });
      }
    }
  });
});


app.post('/deposit/:accno', (req, res) => {
  const accno = req.params.accno;
  const amount = req.body.amount;

  connection.query('SELECT * FROM card WHERE accno = ?', [accno], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      if (results.length > 0) {
        const balance = results[0].balance;
        const cardno = results[0].cardno;
        if (amount > 0) {
          connection.beginTransaction((err) => {
            if (err) {
              console.error('Error starting transaction:', err);
              res.status(500).json({ error: 'An error occurred' });
              return;
            }

            connection.query('UPDATE card SET balance = balance + ? WHERE accno = ?', [amount, accno], (error, results) => {
              if (error) {
                console.error('Error executing query:', error);
                connection.rollback(() => {
                  res.status(500).json({ error: 'An error occurred' });
                });
              } else {
                connection.query(
                  'INSERT INTO transaction (cardno, transtype, amt, date, time) VALUES (?, ?, ?, CURDATE(), CURTIME())',
                  [cardno, 'deposit', amount],
                  (error, results) => {
                    if (error) {
                      console.error('Error executing query:', error);
                      connection.rollback(() => {
                        res.status(500).json({ error: 'An error occurred' });
                      });
                    } else {
                      connection.commit((err) => {
                        if (err) {
                          console.error('Error committing transaction:', err);
                          connection.rollback(() => {
                            res.status(500).json({ error: 'An error occurred' });
                          });
                        } else {
                          console.log('Deposit successful');
                          res.status(200).json({ message: 'Deposit successful' });
                        }
                      });
                    }
                  }
                );
              }
            });
          });
        } else {
          res.status(400).json({ error: 'Enter the amount' });
        }
      } else {
        res.status(404).json({ error: 'Account not found' });
      }
    }
  });
});


app.get('/transaction/:accno', (req, res) => {
  const accno = req.params.accno;

  connection.query('SELECT transtype, amt , date, time FROM transaction, card WHERE accno = ? && card.cardno = transaction.cardno order by date && time', [accno], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(results);
    }
  });
});