const path = require('path');
const express = require('express');

const CUR_DIR = __dirname;
const HTML_FILE = path.resolve(CUR_DIR, '../client/index.html');

const app = express();

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
