'use strict';
module.exports = function(app) {
  var InscricoesController = require('../controllers/InscricoesController');

  app.route('/inscricoes')
    .get((req, res) => {
      InscricoesController.listarInscricoes()
      .then((inscricao) => res.json(inscricao));
    })
    .post((req, res) => {
      let inscricao = req.body;
      res.json(InscricoesController.addInscricao(inscricao))
    });
};