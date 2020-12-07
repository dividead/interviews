const app = require('express')();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const router = require('./router');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // app.use(bodyParser.json());
  app.use(require('express').json());
  app.use(router);

  app.listen(3000, () => console.log('ok'));
});

