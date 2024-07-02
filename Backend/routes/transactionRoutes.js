const express = require('express');
const router = express.Router();
const { createTransaction } = require('../controllers/transactionController'); // Adjust as per your controller

router.post('/', createTransaction);

module.exports = router;
