// index.js
const express = require('express');
const app = express();

app.get('/', (req, resp) => {
  res.send('Hello, World!');
});

const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
