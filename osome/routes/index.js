const main = (req, res, next) => res.send('ok');

const all = (req, res, next) => res.send('404');

const upload = require('./upload');

module.exports = { main, all, upload };