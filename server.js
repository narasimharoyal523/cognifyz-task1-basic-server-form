const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (CSS/JS)
app.use(express.static('public'));

// Home route - renders form
app.get('/', (req, res) => {
  res.render('index', { title: 'Cognifyz Internship' });
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received submission: ${name}, ${email}`);
  res.render('success', { name, email });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});