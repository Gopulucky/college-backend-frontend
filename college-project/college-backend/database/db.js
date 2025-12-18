const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql",        // <-- put your MySQL password if any
  database: "college_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(conn => {
    console.log("✅ MySQL connected");
    conn.release();
  })
  .catch(err => {
    console.error("❌ MySQL connection failed:", err.message);
  });

module.exports = pool;
