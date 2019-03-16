const Pessoa = require('./../models/Pessoa');
const PessoaDAO = require('./../daos/PessoaDAO');

class PessoasController {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listarPessoas(){
        return PessoaDAO.listarPessoas();
    }

    static addPessoa(pessoa){
        console.debug('Cadastrando pessoa', pessoa);
        if(pessoa.name != undefined){
            PessoaDAO.addPessoa(pessoa);
            return pessoa.name + ' inserido(a) com sucesso';
        }
        return 'Dados da pessoa não preenchidos corretamente';
    }
}

module.exports = PessoasController;