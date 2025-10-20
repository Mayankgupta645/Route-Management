const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoURL = process.env.mongodURL;
mongoose.connect(mongoURL);
const db= mongoose.connection;
db.on('connected',()=>{
    console.log("database is connected");
})
db.on('error',()=>{
    console.log("error in database connection");
})
module.exports = db;