import sql from 'mysql2';

const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "atm"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});




export default connection;