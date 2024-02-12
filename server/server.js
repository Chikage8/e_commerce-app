import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg"

const app = express();
app.use(cors());
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());             // for application/json
// app.use(express.urlencoded());       // for application/x-www-form-urlencoded

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "E_commerce_app",
  password: "admin",
  port: 5432,
});
db.connect()

let items = [];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products ORDER BY id ASC");
    items = result.rows;
    // const result2 = await db.query("SELECT id, main_image FROM product_images ORDER BY id ASC")
    // console.log(result2.rows)
    // items.main_image = result2.rows[0].main_image
    // console.log(items)
    res.send(items);    
  } catch (error) {
    console.error("error occurred while trying to fill in items list", error.stack);
  }   
});

app.get("/mouse/:id", async (req, res) => {
  try {
    const id = req.params.id;  
    const result = await db.query("SELECT * FROM mouse_features WHERE mouse_product_id=$1",[id]);
    items = result.rows;
    // const result2 = await db.query("SELECT id, main_image FROM product_images ORDER BY id ASC")
    // console.log(result2.rows)
    // items.main_image = result2.rows[0].main_image
    console.log(items)
    // console.log(items)
    res.send(items);    
  } catch (error) {
    console.error("error occurred while trying to fill in items list", error.stack);
  }   
});

app.post("/signin", async (req, res) => {
  try {
    let email = req.body.email.email;
    let password =req.body.password.password;

    console.log(email);

    const result = await db.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);    
    if (result.rows.length != 0) {
      console.log(result.rows)
      res.send({"user": result.rows[0]})
    } else {
      console.log("sending response");
      res.send("You are not registered to our website")
    }
  } catch (error) {
    console.error("error occurred while trying to fill in items list", error.stack);
  }   
});

app.post("/register", async (req, res) => {
  try {
    let name = req.body.name.name;
    let email = req.body.email.email;
    let password =req.body.password.password;
    // await db.query("DELETE FROM items WHERE id = $1", [itemToDelete]);
    console.log(email, password, name);
    await db.query("INSERT INTO users (email, password, name) VALUES ($1, $2, $3);", [email, password, name]);        
    const result = await db.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);    
    res.send({"user": result.rows[0]})
  } catch (error) {
    console.error("error occurred while trying to register the user", error.stack);
  }   
});

// app.post("/add", async (req, res) => {
//   const itemContent = req.body.newItem;
//   const result = await db.query("SELECT MAX(id)+1 FROM items");
//   const newIndex = Object.values(result.rows[0])[0];  
//   console.log(newIndex)
//   await db.query("INSERT INTO items (id, title) VALUES ($1, $2)", [newIndex, itemContent]); 
//   res.redirect("/");
// });

// app.post("/edit", async (req, res) => {
//   const newContent = req.body.updatedItemTitle;
//   const id = req.body.updatedItemId;
//   const changedItemIndex = items.findIndex((item) => item.id == id);
//   items[changedItemIndex].title = newContent; 
//   await db.query("UPDATE items SET title = $1 WHERE id = $2", [newContent, id]);
//   res.render("index.ejs", {
//     listTitle: "This Month",
//     listItems: items
//   });
// });

// app.post("/delete", async (req, res) => {
//   const itemToDelete = req.body.deleteItemId;
//   await db.query("DELETE FROM items WHERE id = $1", [itemToDelete]);
//   res.redirect("/");
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
