import sql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

export default connection;
