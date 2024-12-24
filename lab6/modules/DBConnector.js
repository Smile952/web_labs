const fs = require('fs')
const path = require('path')

class DBConnector{
    constructor(filename){
        this.filename = filename
    }

    readFile(){
        return fs.readFileSync(path.join(process.cwd(), 'db', this.filename), 'utf-8')
    }

    writeFile(data){
        fs.write(path.join(process.cwd(), 'db', this.filename), data, 'utf-8')
    }
}

module.exports = {
    DBConnector, 
}