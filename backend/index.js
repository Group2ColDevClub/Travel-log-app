const express = require('express');
const verifyToken = require('./middlewares/VerifyToken');
const app = express();
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/trips' , routes.TripsRouter);
app.use('/login' , routes.login);
app.use('/auth' , routes.authentication);

// CORS handle
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// TODO: remove! this is for tests!
app.get('/', verifyToken, (req, res, next) => {
  console.log("success!");
});

app.listen(PORT, () =>
  console.log(`app available on http://localhost:${PORT}`)
);
