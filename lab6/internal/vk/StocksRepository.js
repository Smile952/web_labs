const{DBConnector} = require('../../modules/DBConnector.js') 

class StockRepository{
    static DBConnector = new DBConnector('vk.json')

    static read(){
        const file = this.DBConnector.readFile();
        return JSON.parse(file)
    }

    static write(data){
        this.DBConnector.writeFile(JSON.stringify(data))
    }
}

module.exports = {
    StockRepository
}