import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import pg from "pg";
import mysql from "mysql2";

// require("dotenv").config();

const app = express();
app.use(cors());
// app.use(express.json())
const port = 5000;

// const stripe =  require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // for application/json
// app.use(express.urlencoded());       // for application/x-www-form-urlencoded

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "E_commerce_app",
//   password: "admin",
//   port: 5432,
// });
// db.connect();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'e_commerce_db'
}).promise()

let items = [];



app.get("/", async (req, res) => {
  try {
    console.log("trying pool.query()");
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
    items = result[0];
    console.log("items: " + items);
    res.send(items);
  } catch (error) {
    console.error(
      "error occurred while trying to fill in items list",
      error.stack
    );
  }
});

app.get("/mouse/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(
      "SELECT * FROM mouse_features WHERE mouse_product_id=?",
      [id]
    );
    items = result.rows;
    console.log("items: " + items);
    res.send(items);
  } catch (error) {
    console.error(
      "error occurred while trying to fill in items list",
      error.stack
    );
  }
});

app.post("/signin", async (req, res) => {
  try {
    let email = req.body.email.email;
    let password = req.body.password.password;

    console.log("email: " + email);
    console.log("password: " + password);

    const result = await pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );
    if (result[0].length != 0) {
      console.log("/signin result[0]: ", result[0]);
      res.send({ user: result[0] });
    } else {
      console.log("sending response");
      res.send("You are not registered to our website");
    }
  } catch (error) {
    console.error(
      "error occurred while trying to fill in items list",
      error.stack
    );
  }
});

app.post("/register", async (req, res) => {
  try {
    let name = req.body.name.name;
    let email = req.body.email.email;
    let password = req.body.password.hash;
    console.log("name: " + name + "\n" + "email: " + email + "\n");
    // await pool.query("DELETE FROM items WHERE id = ?", [itemToDelete]);
    console.log(email, password, name);
    await pool.query(
      "INSERT INTO users (email, password, name) VALUES (?, ?, ?);",
      [email, password, name]
    );
    const result = await pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );
    console.log("/register result[0]: ", result[0]);
    res.send({ user: result[0] });
  } catch (error) {
    console.error(
      "error occurred while trying to register the user",
      error.stack
    );
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
