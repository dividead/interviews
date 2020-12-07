const fs = require('fs');

const read = (path) => fs.readFileSync(path, 'utf-8');

module.exports = { read };