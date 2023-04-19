const express = require('express');
const router = express.Router();
const authenticateMiddelware = require('../middlewares/VerifyToken');

router.post('/', authenticateMiddelware);


module.exports = router;
