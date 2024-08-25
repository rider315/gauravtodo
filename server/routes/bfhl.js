const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

// Route for GET method
router.get('/', bfhlController.getOperationCode);

// Route for POST method
router.post('/', bfhlController.handlePostRequest);

module.exports = router;
