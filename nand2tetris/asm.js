const { read } = require('./fs');
const { parse } = require('./parser');

const run = (rom) => rom;

const main = (path) => {
  const source = read(path);
  const code = parse(source);
  console.log(require('util').inspect(code, false, null, true));
  run(code);
};

main(process.argv[2]);