const appProperties = require('./../config/properties');
const ConnectionManager = require('./../daos/ConnectionManager');

class EventoDAO {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listarEventos(){
        return new ConnectionManager().connect().then(function(db){
            return db.collection('Eventos').find({}).toArray();
        });
    }

    static addEvento(evento){
        new ConnectionManager().connect().then(function(db){
            db.collection('Eventos', (err, collection) => {
                collection.insertOne(evento);
            }); 
        })
    }

}

module.exports = EventoDAO;