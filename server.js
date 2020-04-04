const express = require('express');
const path = require('path');
const cors = require('cors');
const scrapeData = require('./scrape')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));

app.get('/svoya-igra', async function (req, res) {
  const response = await scrapeData();
  res.send(response);
});

app.listen(port, function () {
  console.log('Server listening on port 8080');
});
