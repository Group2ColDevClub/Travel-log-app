const TripsSearch = require('../models/TripSearchModel');

// Get all trips
const getAllTrips = async (req, res) => {
    try {
        const tripSearches = await TripsSearch.find();
        res.json(tripSearches);
    } catch (e) {
        console.log(e);
        res.status(500).send({ msg: e.message });
    }
};

// Get a single trip by ID
const getTripById = async (req, res) => {
    try {
        const tripSearches = await TripsSearch.findById(req.params.id);
        if(!tripSearches){
            res.status(204).send('can not find by this id');
        }
        res.send(tripSearches);
    } catch (e) {
        console.log(e);
        res.status(500).send({ msg: e.message });
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
        res.status(400).send({ msg: e.message });
    }
};

// Update a trip by ID
const updateTripById = async (req, res, next) => {
    const {numberOfTravelers,destination} = req.body;
    if (numberOfTravelers)
        res.tripSearches.numberOfTravelers = numberOfTravelers;
    if (destination)
        res.tripSearches.destination = destination;
    try {
        const updatedTripSearched = await res.tripSearches.save();
        res.json(updatedTripSearched);
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    updateTripById
};