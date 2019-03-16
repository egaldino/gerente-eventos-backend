const Inscricao = require('./../models/Inscricao');
const InscricaoDAO = require('./../daos/InscricaoDAO');

class InscricoesController {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listarInscricoes(){
        return InscricaoDAO.listarPessoas();
    }

    static addInscricao(inscricao){
        console.debug('Realizando inscricao', inscricao);
        if(inscricao.pessoa._id != undefined){
            InscricaoDAO.addInscricao(inscricao);
            return "Inscricao de " + inscricao.pessoa.name + ' inserida com sucesso';
        } 
        return 'Dados da inscrição não preenchidos corretamente';
    }
}

module.exports = InscricoesController;