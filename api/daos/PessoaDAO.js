const appProperties = require('./../config/properties');
const ConnectionManager = require('./../daos/ConnectionManager');

class PessoaDAO {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listarPessoas(){
        return new ConnectionManager().connect().then(function(db){
            return db.collection('Pessoas').find({}).toArray();
        });
    }

    static addPessoa(pessoa){
        new ConnectionManager().connect().then(function(db){
            db.collection('Pessoas', (err, collection) => {
                collection.insertOne(pessoa);
            }); 
        })
    }

}

module.exports = PessoaDAO;