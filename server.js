const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Inside memory data store
const books = [
  { id: 1, title: 'Live Long have Fun', author: 'Uttam Pulami Magar' },
  { id: 2, title: 'Where Are You?', author: 'Uttam Magar' }
];
const nextId = 3;

//Get all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

//Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  
  const newBook = {
    id: nextId++,
    title,
    author
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by id
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  
  const bookIndex = books.findIndex(book => book.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  if (title) books[bookIndex].title = title;
  if (author) books[bookIndex].author = author;
  
  res.status(200).json(books[bookIndex]);
});

//  Delete a book by id
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const bookIndex = books.findIndex(book => book.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  const deletedBook = books.splice(bookIndex, 1)[0];
  res.status(200).json(deletedBook);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
