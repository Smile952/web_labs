const express = require('express');
const vk = require('./internal/vk/vk.js')
const stocks = require('./internal/stocks/stocks.js')
const cors = require('cors')

const app = express();

const host = 'localhost';
const port = 8000;
app.use(cors({ origin: 'http://127.0.0.1:5500' }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/stocks', stocks);
app.use('/vk', vk)

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
});