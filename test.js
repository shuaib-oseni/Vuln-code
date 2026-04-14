// vulnerable.js
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;

  // ❌ Vulnerable to XSS
  res.send(`<h1>Search Results for: ${query}</h1>`);
});

app.listen(3000, () => console.log('Server running'));
