const appProperties = require('./../config/properties');
const mongoClient = require('mongodb').MongoClient;

class ConnectionManager {

    constructor(){
       this._dbName = appProperties.mongo.db;
    }

    connect(){   
        return new Promise(function(resolve, reject){
            mongoClient.connect(appProperties.mongo.host)
            .then((connection) => resolve(connection.db(appProperties.mongo.db)));
        });
        
    }

}

module.exports = ConnectionManager;