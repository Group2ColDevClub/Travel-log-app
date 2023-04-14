const express = require('express'); 
const mongoConnect = require('./config/mongoConnect.js')
const routes = require('./routes');

const verifyToken = require('./middlewares/VerifyToken');
const app = express();
require('dotenv').config();

app.use(express.json())

app.use('/trips' , routes.TripsRouter)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

require('./routes')(app);

// TODO: remove! this is for tests!
app.get('/', verifyToken, (req, res, next) => {
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
  mongoConnect();
})
