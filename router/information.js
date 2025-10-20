const express = require('express');
const router = express.Router();
const trip= require('../models/schema');

router.post('/addtrip',(req,res)=>{
    const newTrip = new trip({
        startlocation: req.body.startlocation,
        destination: req.body.destination,
        price: req.body.price
    });
    newTrip.save()
        .then(() => res.status(201).json({ message: 'Trip added successfully' }))
        .catch((error) => res.status(400).json({ error }));
});
router.get('/trips/price', async (req, res) => {
    const { startlocation, destination } = req.query;  // example: /trips/price?startlocation=Agra&destination=Delhi

    try {
        const foundtrip = await trip.findOne({ startlocation, destination });
        if (foundtrip) {
            console.log("price found");
            res.status(200).json({ price: foundtrip.price });
        } else {
            res.status(404).json({ message: 'Trip not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

router.get('/trips', async (req, res) => {
    try {
        const trips = await trip.find();
        console.log("data showed");
        res.status(200).json(trips);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

module.exports = router;


