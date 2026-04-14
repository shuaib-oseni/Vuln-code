// vulnerable.js
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

app.get('/user', (req, res) => {
  const username = req.query.username;

  // ❌ Vulnerable to SQL Injection
  const query = `SELECT * FROM users WHERE username = '${username}'`;

  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send('Error');
    } else {
      res.json(result);
    }
  });
});

app.listen(3000, () => console.log('Server running'));
