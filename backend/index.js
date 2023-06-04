
const express = require('express');
const cors = require('cors');
const mongoConnect = require('./config/mongoConnect.js')
const routes = require('./routes');

const app = express();
require('dotenv').config();

app.use("/posts", routes.PostsRouter);
const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use('/trips', routes.TripsRouter);
app.use('/login', routes.login);
app.use('/logout', routes.logout);
app.use('/signup', routes.signup);
app.use('/authenticate', routes.authentication);

app.listen(PORT, () => {
  console.log(`app available on http://localhost:${PORT}`);
  mongoConnect();
});
