const express = require("express");
const morgan = require("morgan");

const db = require("./utils/database");
// const Book = require("./resources/books/model");
// const Pet = require("./resources/pets/model");
const booksRouter = require("./resources/books/router");

/* IMPORT ROUTERS */

const app = express();

/* SETUP MIDDLEWARE */

app.use(morgan("dev"));
app.use(express.json());

/* SETUP ROUTES */
app.use("/books", booksRouter);

/* CATCH-ALL TO TEST ROUTES */

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  db.connect((error) => {
    if (error) {
      console.error("[ERROR] Connection error: ", error.stack);
    } else {
      console.log("\n[DB] Connected...\n");

      // Book();
      // Pet();
    }
  });

  console.log(`[SERVER] Running on http://localhost:${port}/`);
});
