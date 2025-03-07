const express = require('express');
const {StocksController} = require('./StocksController.js');

const router = express.Router();

router.get('/', StocksController.findStocks);
router.get('/:id', StocksController.findStockById);
router.post('/', StocksController.addStock);
router.post('/:id', StocksController.deleteStock);

module.exports = router;