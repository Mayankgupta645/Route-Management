const mongoose = require('mongoose');
const tripSchemma=new mongoose.Schema({
    startlocation:{
        type: String,
        required:true
    },
    destination:{
        type: String,
        required:true  },
        price:{
            type: Number,
            required:true   
        },
        distance:{
            type: Number,
            
        }

})
 const trip = mongoose.model('trip',tripSchemma);
 module.exports= trip;