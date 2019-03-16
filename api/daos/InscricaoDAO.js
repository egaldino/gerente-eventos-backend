const appProperties = require('./../config/properties');
const ConnectionManager = require('./../daos/ConnectionManager');

class InscricaoDAO {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listarInscricoes(){
        return new ConnectionManager().connect().then(function(db){
            return db.collection('Inscricoes').find({}).toArray();
        });
    }

    static addInscricao(inscricao){
        new ConnectionManager().connect().then(function(db){
            db.collection('Inscricoes', (err, collection) => {
                collection.insertOne(inscricao);
            }); 
        })
    }

}

module.exports = InscricaoDAO;