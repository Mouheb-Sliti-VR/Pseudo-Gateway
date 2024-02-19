// routes/processFlowRoute.js
const express = require('express');
const router = express.Router();
const processFlowController = require('../controllers/processFlowController');

// Route to handle POST request for process flow
router.post('/mock/processFlow', processFlowController.processFlow);

module.exports = router;
