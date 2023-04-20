const express = require('express');
const verifyToken = require('./middlewares/VerifyToken');
const app = express();
const routes = require('./routes');
const mongoConnect = require('./config/mongoConnect');

require('dotenv').config();

const PORT = process.env.SERVER_PORT;

app.use(express.json());

// CORS handle
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/trips', routes.TripsRouter);
app.use('/login', routes.login);
app.use('/logout', routes.logout);
app.use('/authenticate', routes.authentication);

app.listen(PORT, () => {
  console.log(`app available on http://localhost:${PORT}`);
  mongoConnect();
});
