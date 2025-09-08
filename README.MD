# Digital Bookshelf API

A simple RESTful API built with **Express** and **Mongoose** that allows librarians to manage a digital book collection. It supports full CRUD (Create, Read, Update, Delete) operations.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd digital-bookshelf-api

2. Install dependencies:<br>
```npm install```


3. Create a .env file in the project root with:

MONGODB_URI=your-mongodb-atlas-uri
PORT=3000 <br>


4. Start the server:
   
```npm run dev```
<br>

## How It Works

- Database: Uses MongoDB Atlas (or local MongoDB) connected via Mongoose.

- Models: Book model defines title, author, isbn, publishedDate, and inStock fields.

- Routes: Located in routes/bookRoutes.js and mounted at /api/books.

### Endpoints

POST /api/books → Create a new book

GET /api/books → Get all books

GET /api/books/:id → Get a book by ID

PUT /api/books/:id → Update a book by ID

DELETE /api/books/:id → Delete a book by ID

Test routes using Postman, Insomnia, or curl.