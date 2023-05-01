const express = require('express');
const app = express();
const cors = require('cors');
const mongoConnect = require('./config/mongoConnect.js')
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use('/trips', routes.TripsRouter);
app.use('/login', routes.login);
app.use('/logout', routes.logout);
app.use('/authenticate', routes.authentication);

// TODO - FOR TESTING
app.post('/create', async (req, res, next) => {
  try {
    const UsersModel = require('./models/UsersModel');
    const reqBody = req.body;
    const newUser = new UsersModel({
      username: reqBody.username, 
      password: reqBody.password,
      email: reqBody.email,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(200).json(savedUser)
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message)
  }
});

app.listen(PORT, () => {
  console.log(`app available on http://localhost:${PORT}`);
  mongoConnect();
});
