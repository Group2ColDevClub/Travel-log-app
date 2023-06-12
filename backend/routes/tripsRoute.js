const express = require('express');
const router = express.Router();
const { getAllTrips, getTripById, createTrip, updateTripById } = require('../controllers/tripsController');
const { getTripSearch } = require('../middlewares/index.js');

router.get('/', getAllTrips);

router.get("/:id", getTripSearch, getTripById);

router.post('/', createTrip);

router.put("/:id", getTripSearch, updateTripById);

module.exports = router;