const Pessoa = require('./../models/Evento');
const EventoDAO = require('./../daos/EventoDAO');

class EventosController {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listarEventos(){
        return EventoDAO.listarEventos();
    }

    static addEvento(evento){
        console.debug('Cadastrando evento', evento);
        if(evento.titulo != undefined){
            EventoDAO.addEvento(evento);
            return '"' + evento.titulo + '\" inserido com sucesso';
        }
        return 'Dados do evento não preenchidos corretamente';
    }
}

module.exports = EventosController;