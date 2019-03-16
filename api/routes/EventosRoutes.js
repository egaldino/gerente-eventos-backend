'use strict';
module.exports = function(app) {
  var EventosController = require('../controllers/EventosController');

  app.route('/eventos')
    .get((req, res) => {
      EventosController.listarEventos()
      .then((eventos) => res.json(eventos));
    });

  app.route('/evento')
    .post((req, res) => {
      let evento = req.body;
      res.json(EventosController.addEvento(evento))
    });
};