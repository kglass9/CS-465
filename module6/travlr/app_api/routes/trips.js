const express = require('express');
const router = express.Router();
const ctrlTrips= require('../controllers/trips');

/* GET tripsList page. */
router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripCode', ctrlTrips.tripsFindCode);

module.exports = router;