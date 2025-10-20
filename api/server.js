const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const informationRouter = require('./router/information');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send("Welcome to the travel agency API");
});

app.use('/api', informationRouter);

module.exports = app; // ✅ For Vercel
