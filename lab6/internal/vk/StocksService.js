const {StockDAO} = require('./StocksDAO.js')

class StocksService{
    static findStocks(id){
        if( id !== undefined){
            return StockDAO.findById(id).toJSON()
        }
        return StockDAO.find()
    }

    static addStock(stock){
        return StockDAO.insert(stock)
    }
    static addStocks(stocks){
        return StockDAO.insertAll(stocks)
    }

    static deleteStock(id){
        return StockDAO.delete(id)
    }
}

module.exports = {
    StocksService
}