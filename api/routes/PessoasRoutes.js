'use strict';
module.exports = function(app) {
  var PessoasController = require('../controllers/PessoasController');

  app.route('/pessoas')
    .get((req, res) => {
      PessoasController.listarPessoas()
      .then((pessoas) => res.json(pessoas));
    });

  app.route('/pessoa')
    .post((req, res) => {
      let pessoa = req.body;
      res.json(PessoasController.addPessoa(pessoa))
    });
};