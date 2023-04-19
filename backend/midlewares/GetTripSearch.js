const TripsSearch = require('../models/TripSearchModel');

const getTripSearch = async function getTripsSearch(req,res,next) {
    let tripsSearch;
    try{
        tripsSearch = await TripsSearch.findById(req.params.id)
        console.log(tripsSearch);
    if (tripsSearch == null)
        return res.status(404).json({message : "cannot find this trip"})    
    }
    catch(e){
        return res.status(500).json({message : e.message})    
    }

    res.tripSearches = tripsSearch;
    next();
}

module.exports = getTripSearch;


