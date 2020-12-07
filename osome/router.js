const { Router } = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const router = new Router();

router
  .get('/', routes.main)
  .post('/upload', bodyParser.json(), routes.upload)
  .get('*', routes.all);

module.exports = router;