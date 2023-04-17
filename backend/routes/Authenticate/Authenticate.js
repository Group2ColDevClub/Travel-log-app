const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticateMiddelware = require('../../middlewares/VerifyToken');
// test
router.use('/authenticate', authenticateMiddelware);

module.exports = router;
