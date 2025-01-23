
const {StockRepository} = require('./StocksRepository.js');

class StockDAO{
    constructor(id, photo_400_orig, first_name, last_name){
        this.id = id;
        this.photo = photo_400_orig;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    static _validateId(id){
        const numberId = parseInt(id);
        if(Number.isNaN(numberId)){
            throw new Error('invalid id');
        }
    }

    static _validate(stock){
        if(stock.id === undefined || stock.photo === undefined || stock.first_name === undefined || stock.last_name === undefined){
            throw new Error('Invalid stock data');
        }
        this._validateId(stock.id);
    }

    static find(){
        const stock = StockRepository.read();
        
        return stock.map(({id, photo_400_orig, first_name, last_name})=>{
            return new this(id, photo_400_orig , first_name, last_name)
        });
    }

    static findById(id){
        this._validateId(id);

        const stocks = StockRepository.read();
        const stock = stocks.find((s) => s.id === id);
        return new this(stock.id, stock.photo_400_orig, stock.first_name, stock.last_name);
    }

    static insert(stock){
        this._validate(stock);
        stock.id = parseInt(stock.id)
        const stocks = StockRepository.read();
        
        StockRepository.write([...stocks, stock]);
        return new this(stock.id, stock.photo_400_orig, stock.first_name, stock.last_name);
    }

    static insertAll(stocks){
        console.log(stocks)
        stocks.forEach(element => {
            element.id = parseInt(element.id)
        });
        StockRepository.write(stocks)
    }

    static delete(id) {
        this._validateId(id);

        const stocks = StockRepository.read();
        const filteredStocks = stocks.filter((s) => s.id !== id);
        StockRepository.write(filteredStocks);

        return filteredStocks.map(({id, photo_400_orig, first_name, last_name}) => {
            return new this(id, photo_400_orig, first_name, last_name);
        });
    }

    toJSON() {
        return {
            id: this.id,
            photo: this.photo,
            first_name: this.first_name,
            last_name: this.last_name,
        }
    }
}

module.exports = {
    StockDAO
}