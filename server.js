require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.get('/', (_req, res) => res.send('📚 Digital Bookshelf API is running'));
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});