const express = require('express');
const router = express.Router();
const controller= require('../controllers/trips');

/* GET tripsList page. */
router.get('/', controller.tripsList);
router.get('/', controller.tripsFindCode);

module.exports = router;