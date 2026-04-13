# Books REST API

A simple REST API to manage a list of books using Express.js.

## Setup Instructions

1. **Initialize the project** (already done - package.json created):
   ```bash
   npm init -y
   ```

2. **Install Express**:
   ```bash
   npm install express
   ```

3. **Start the server**:
   ```bash
   npm start
   ```
   Or:
   ```bash
   node server.js
   ```

The server will run on `http://localhost:3000`

## API Endpoints

### 1. GET /books
Get all books

**Request:**
```bash
curl http://localhost:3000/books
```

**Response:** `200 OK`
```json
[
  { "id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
  { "id": 2, "title": "1984", "author": "George Orwell" }
]
```

### 2. POST /books
Add a new book

**Request:**
```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title": "To Kill a Mockingbird", "author": "Harper Lee"}'
```

**Request Body:**
```json
{
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee"
}
```

**Response:** `201 Created`
```json
{
  "id": 3,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee"
}
```

### 3. PUT /books/:id
Update a book by ID

**Request:**
```bash
curl -X PUT http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "The Great Gatsby - Updated", "author": "F. Scott Fitzgerald"}'
```

**Request Body:**
```json
{
  "title": "The Great Gatsby - Updated",
  "author": "F. Scott Fitzgerald"
}
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "title": "The Great Gatsby - Updated",
  "author": "F. Scott Fitzgerald"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Book not found"
}
```

### 4. DELETE /books/:id
Delete a book by ID

**Request:**
```bash
curl -X DELETE http://localhost:3000/books/1
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Book not found"
}
```

## Testing with curl or Postman

You can test the API using curl commands (shown above) or import the endpoints into Postman.
