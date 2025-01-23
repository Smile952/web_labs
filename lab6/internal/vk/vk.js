const express = require('express');
const {StocksController} = require('./StocksController.js');

const router = express.Router();

router.get('/update', StocksController.addStocks)
router.get('/', StocksController.findStocks);
router.get('/person/:id', StocksController.findStockById);
router.post('/', StocksController.addStock);
router.post('/delete/:id', StocksController.deleteStock);

module.exports = router;