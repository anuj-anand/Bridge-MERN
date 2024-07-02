const express = require('express');
const router = express.Router();
const { getQuotes } = require('../controllers/quoteController'); // Adjust as per your controller

router.post('/', getQuotes);

module.exports = router;
