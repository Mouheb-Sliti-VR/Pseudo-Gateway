// routes/processFlowRoute.js
const express = require('express');
const router = express.Router();
const processFlowController = require('../controllers/processFlowController');

// Route to handle POST request for process flow
router.post('/mock/processFlow', processFlowController.processFlow);
router.post('/mock/confirmConf', processFlowController.confirmConfiguration);
router.post('/mock/validateOrder', processFlowController.validateOrder);
router.post('/mock/payOrder', processFlowController.payOrder);
router.post('/mock/NotifyOrder',processFlowController.notifyOrder);


module.exports = router;
