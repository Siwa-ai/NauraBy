const mysql = require("mysql2");

const db = mysql.createConnection({
host: "xxxx",
user: "xxxx",
password: "xxxx",
database: "sevenspa"
});

db.connect((err) => {
if (err) {
console.log("DB ERROR", err);
} else {
console.log("MYSQL CONNECTED");
}
});

module.exports = db;
