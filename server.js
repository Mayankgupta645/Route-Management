const express = require('express');
const cors = require('cors');  
const db = require('./db/db');
const app = express();
const informationRouter = require('./router/information');
const bodyParser = require('body-parser');

app.use(cors());  
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send("welcome to the travel agency price telling");
});

app.use('/api', informationRouter);

app.listen(3000, () => {
    console.log("server is running on port 3000");
});