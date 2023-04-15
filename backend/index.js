const express = require('express'); 
// import { promises as fs, readFile } from "fs";
const mongoConnect = require('./config/mongoConnect.js')
const tripsSearch = require('./models/TripSearchModel.js');

const app = express();

app.use(express.json())


const tripsRoute = require('./routes/TripsRoute.js')
app.use('/trips' , tripsRoute)

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
  mongoConnect();
})
