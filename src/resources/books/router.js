const express = require("express");
const { findAll, findOne } = require("./controller");
const booksRouter = express.Router();

booksRouter.get("/", findAll);
booksRouter.get("/:id", findOne);

module.exports = booksRouter;
