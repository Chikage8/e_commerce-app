import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg"

const app = express();
app.use(cors());
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

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
    res.send(items);    
  } catch (error) {
    console.error("error occurred while trying to fill in items list", error.stack);
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
