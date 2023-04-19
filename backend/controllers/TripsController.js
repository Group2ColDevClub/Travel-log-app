const TripsSearch = require('../models/TripSearchModel');

// Get all trips
const getAllTrips = async (req, res) => {
    try {
        const tripSearches = await TripsSearch.find();
        res.json(tripSearches);
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
};

// Get a single trip by ID
const getTripById = async (req, res) => {
    try {
        const tripSearches = await TripsSearch.findById(req.params.id);
        res.send(tripSearches);
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
};

// Create a new trip
const createTrip = async (req, res, next) => {
    const { numberOfTravelers, destination } = req.body;
    const tripSearched = new TripsSearch({ numberOfTravelers: numberOfTravelers, destination: destination });
    try {
        const newSearchedTrips = await tripSearched.save();
        res.status(201).json(newSearchedTrips);
    } catch (e) {
        res.status(400).send({ message: e.message });
    }
};

// Update a trip by ID
const updateTripById = async (req, res,next) => {
    if (req.body.numberOfTravelers != null)
        res.tripSearches.numberOfTravelers = req.body.numberOfTravelers;
    if (req.body.destination != null)
        res.tripSearches.destination = req.body.destination;
    try {
        const updatedTripSearched = await res.tripSearches.save();
        res.json(updatedTripSearched);
    } catch (e) {
        res.status(400).send({ message: e.message });
    }
};

module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    updateTripById
};
