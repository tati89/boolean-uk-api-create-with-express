// No need to import the Book model just the db
const Book = require("./model");

const { findAllBooks, findAbook } = Book();

function findAll(req, res) {
  findAllBooks((books) => {
    res.json({ books });
  });
}

function findOne(req, res) {
  const id = Number(req.params.id);
  findAbook(id, (book) => {
    res.json(book);
  });
}

module.exports = { findAll, findOne };
