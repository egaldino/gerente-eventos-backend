class Pessoa {

    constructor(name, telefone, email) {
        this._name = name;
        this._telefone = telefone;
        this._email = email;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    } 

    get telefone(){
        return this._telefone;
    }
    set telefone(telefone){
        this._telefone = telefone;
    }

    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }

}

module.exports = Pessoa;