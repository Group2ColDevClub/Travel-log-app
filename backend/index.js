const express = require('express'); 
const mongoConnect = require('./config/mongoConnect.js')
const routes = require('./routes');

const app = express();

app.use(express.json())

app.use('/trips' , routes.TripsRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
  mongoConnect();
})
