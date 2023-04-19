const express = require('express')
const router = express.Router();
const { getAllTrips, getTripById, createTrip, updateTripById } = require('../controllers/TripsController');
const getTripsSearch = require('../midlewares/GetTripSearch.js')

router.get('/', getAllTrips);

router.get("/:id",getTripsSearch, getTripById);

router.post('/', createTrip);

router.put("/:id",getTripsSearch,updateTripById);

module.exports = router;