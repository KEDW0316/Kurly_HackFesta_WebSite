const mysql2 = require("mysql2/promise");

let objLength;
let objList;

const db = async () => {
  try {
    let connection = await mysql2.createConnection({
      host: process.env.DB_URL,
      port: process.env.DB_PORT,
      user: "root",
      password: process.env.DB_PASSWORD,
      database: "kurlyDB",
    });
    let sql = "SELECT * FROM kurlyDB.invoice_test";
    let [rows, fields] = await connection.query(sql);
    objLength = rows.length;
    objList = rows;
  } catch (e) {}
};

export const home = async (req, res) => {
  db();
  await res.render("home", { objList });
};
