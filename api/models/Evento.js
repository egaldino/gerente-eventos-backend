class Evento {

    constructor(titulo) {
        this._titulo = titulo;
        this._descricao;
        this._lugar;
        this._inicio;
        this._fim;

        this._inscricoes = [];
    }

    addInscricao(inscricao){
        this._inscricoes.push(inscricao);
    }

    get titulo(){
        return this._titulo;
    }
    set titulo(titulo){
        this._titulo = titulo;
    }

    get descricao(){
        return this._descricao;
    }
    set descricao(descricao){
        this._descricao = descricao;
    } 

    get lugar(){
        return this._lugar;
    }
    set lugar(lugar){
        this._lugar = lugar;
    } 

    get inicio(){
        return this._inicio;
    }
    set inicio(inicio){
        this._inicio = inicio;
    } 

    get fim(){
        return this._fim;
    }
    set fim(fim){
        this._fim = fim;
    } 

    get inscricoes(){
        return [].concat(this._inscricoes);
    }

}

module.exports = Evento;