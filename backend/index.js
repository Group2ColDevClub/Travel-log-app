const express = require('express');
const mongoConnect = require('./config/mongoConnect.js')
const routes = require('./routes');
const verifyToken = require('./middlewares/VerifyToken');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/trips', routes.TripsRouter);
app.use('/login', routes.login);
app.use('/authenticate', routes.authentication);

// TODO: remove! this is for tests!
app.get('/protected', verifyToken, (req, res, next) => {
  console.log("success!");
});


// remove test
const User = require('./models/UsersModel.js')
app.all('/testAdd', async (req, res, next) => {
  const user = new User({ username: "John", password: "123", email: "abcd@gmail.com" });
  await user.save();
  res.json(user)
});
// 
app.listen(PORT, () => {
  console.log(`app available on http://localhost:${PORT}`)
  mongoConnect();
});
