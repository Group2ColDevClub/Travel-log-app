const TripsSearch = require("../models/TripSearchModel");
const axios = require("axios");
require("dotenv").config();
const { getDateTime, formatPrice } = require("../utils/utils");

const getAllTrips = async (req, res) => {
  try {
    const tripSearches = await TripsSearch.find();
    res.json(tripSearches);
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

const getTripById = async (req, res) => {
  try {
    const tripSearches = await TripsSearch.findById(req.params.id);
    if (!tripSearches) {
      res.status(204).send("can not find by this id");
    }
    res.send(tripSearches);
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

const updateTripById = async (req, res, next) => {
  const { numberOfTravelers, destination } = req.body;
  if (numberOfTravelers) res.tripSearches.numberOfTravelers = numberOfTravelers;
  if (destination) res.tripSearches.destination = destination;
  try {
    const updatedTripSearched = await res.tripSearches.save();
    res.json(updatedTripSearched);
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

const createTrip = async (req, res, next) => {
  const { numberOfTravelers, destination, startDate, endDate } = req.body;
  try{
    const existingTrip = await TripsSearch.findOne({
      destination: destination,
      'flights': {
        $elemMatch: {
          flightStartDate: { $gte: new Date(startDate) },
          flightEndDate: { $lte: new Date(endDate) }
        }
      },
      numberOfTravelers: numberOfTravelers,
    });
    if (existingTrip) res.json(existingTrip);
    else{
      const searchedTrip = await searchNewTrip(req, res, next);
      console.log(searchedTrip);  
    }
  }catch(e){
    console.log({msg : e.message});
  }
};

const searchNewTrip = async (req, res, next) => {
  const { location, numberOfTravelers, startDate, endDate } = req.body;

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  try {
    const { data: entityData } = await callToGetEntityData(location);

    if (!entityData?.places?.[0]) res.send(404);

    let entityId = entityData.places[0].entityId;

    if (entityId) {
      const query = createQueryData(
        entityId,
        startDateObj,
        endDateObj,
        numberOfTravelers
      );

      const { data: flightRes } = await callFlightsPrices(query);

      const formattedRes = formatPricesResponse(flightRes);

      const flights = createFlightsArray(formattedRes);

      const tripSearched = new TripsSearch({
        numberOfTravelers: numberOfTravelers,
        destination: location,
        flights: flights,
      });

      await SaveDataToDB(tripSearched, res);
    } else res.status(404).send("city is not found");
  } catch (e) {
    res.status(500).send({ msg: e.message, err: "external server error" });
  }
};

async function SaveDataToDB(tripSearched, res) {
  try {
    const newSearchedTrips = await tripSearched.save();
    res.status(201).json(newSearchedTrips);
  } catch (e) {
    res.status(400).send({
      msg: e.message,
      err: "internal server error or bad request",
    });
  }
}

async function callToGetEntityData(location) {
  return await axios.post(
    "https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights",
    {
      query: {
        market: "US",
        locale: "en-US",
        searchTerm: location,
      },
      limit: 50,
    },
    {
      headers: createHeader(),
    }
  );
}

async function callFlightsPrices(query) {
  return await axios.post(
    "https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create",
    { query },
    {
      headers: createHeader(),
    }
  );
}

function createFlightsArray(formattedRes) {
  return formattedRes.map((flight) => ({
    flightID: [
      {
        arrivalSegment: flight.arrivalSeg,
        returnSegment: flight.returnSeg,
      },
    ],
    flightPrice: flight.price,
    flightStartDate: flight.arrivalDate,
    flightEndDate: flight.returnDate,
    deepLink: flight.deepLink,
  }));
}

function getDeepLink(pricingOption) {
  return pricingOption.items[0].deepLink || null;
}

function formatItinerary(itinerary, segments) {
  const pricingOption = itinerary.pricingOptions[0];
  const price = pricingOption.price.amount;
  const formattedPrice = formatPrice(price);
  const deepLink = getDeepLink(pricingOption);
  const arrivalSegment = pricingOption.items[0]?.fares[0].segmentId;
  const arrivalDateTimeObj = segments[arrivalSegment].departureDateTime;
  const arrivalDate = getDateTime(arrivalDateTimeObj);
  const returnSegment =
    pricingOption.items[0].fares[pricingOption.items[0].fares.length - 1]
      .segmentId;
  const returnDateTimeObj = segments[returnSegment].departureDateTime;
  const returnDate = getDateTime(returnDateTimeObj);
  return {
    price: formattedPrice,
    deepLink: deepLink,
    arrivalDate: arrivalDate,
    returnDate: returnDate,
    arrivalSeg: arrivalSegment,
    returnSeg: returnSegment,
  };
}

function formatPricesResponse(flightRes) {
  const itineraryKeys = Object.keys(flightRes.content.results.itineraries);
  const segments = flightRes.content.results.segments;
  const formattedRes = itineraryKeys.map((key) => {
    const itinerary = flightRes.content.results.itineraries[key];
    const formattedItinerary = formatItinerary(itinerary, segments);
    return formattedItinerary;
  });
  return formattedRes;
}

function createQueryData(
  entityId,
  startDateObj,
  endDateObj,
  numberOfTravelers
) {
  return {
    market: "US",
    locale: "en-US",
    currency: "USD",
    queryLegs: [
      {
        originPlaceId: {
          iata: "TLV",
        },
        destinationPlaceId: {
          entityId: entityId,
        },
        date: {
          year: startDateObj.getFullYear(),
          month: startDateObj.getMonth() + 1,
          day: startDateObj.getDate(),
        },
      },
      {
        originPlaceId: {
          entityId: entityId,
        },
        destinationPlaceId: {
          iata: "TLV",
        },
        date: {
          year: endDateObj.getFullYear(),
          month: endDateObj.getMonth() + 1,
          day: endDateObj.getDate(),
        },
      },
    ],
    adults: numberOfTravelers,
    childrenAges: [],
    cabinClass: "CABIN_CLASS_ECONOMY",
    excludedAgentsIds: [],
    excludedCarriersIds: [],
    includedAgentsIds: [],
    includedCarriersIds: [],
  };
}

function createHeader() {
  return {
    "x-api-key": process.env.API_KEY,
    "Content-Type": "application/json",
  };
}

module.exports = {
  getAllTrips,
  getTripById,
  createTrip,
  updateTripById,
  searchNewTrip,
};
