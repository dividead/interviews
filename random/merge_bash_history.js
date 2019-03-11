const fs = require('fs').promises;
const path = require('path');

const uniq = new Set();
const history = [];

async function go(_path) {
  const raw = await fs.readFile(_path);
  const data = raw.toString().split(/\n/);
  for (const line of data) {
    const [_, cmd] = line.split(';');
    if (!uniq.has(cmd)) {
      uniq.add(cmd);
      history.push(line);
    }
  }
}

async function main() {
  try {
    await go(path.resolve('/Users/noir', '.zsh_history'));
    await go(path.resolve('move.txt'));
    await fs.writeFile('merged.txt', history.join('\n'));
  } catch (error) {
    console.error(error);
  }
}

main();
