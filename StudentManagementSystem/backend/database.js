// import mysql from "mysql2";
// exports.connectDb = () => {
//   try {
//     const pool = mysql.createPool({
//       host: process.env.DB_HOST,
//       user: process.env.DB_HOST_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//     });
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool.promise();
