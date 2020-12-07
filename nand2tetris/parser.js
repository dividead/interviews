const comp = {
  '0': '0101010',
  '1': '0111111',
  '-1': '0111010',
  'D': '0001100',
  'A': '0110000',
  'M': '1110000',
  '!D': '0001101',
  '!A': '0110001',
  '!M': '1110001',
  '-D': '0001111',
  '-A': '0110011',
  '-M': '1110011',
  'D+1': '0011111',
  'A+1': '0110111',
  'M+1': '1110111',
  'D-1': '0001110',
  'A-1': '0110010',
  'M-1': '1110010',
  'D+A': '0000010',
  'D+M': '1000010',
  'D-A': '0010011',
  'D-M': '1010011',
  'A-D': '0000111',
  'M-D': '1000111',
  'D&A': '0000000',
  'D&M': '1000000',
  'D|A': '0010101',
  'D|M': '1010101',
};
const dest = {
  '': '000',
  'M': '001',
  'D': '010',
  'MD': '011',
  'A': '100',
  'AM': '101',
  'AD': '110',
  'AMD': '111',
};
const jump = {
  '': '000',
  'JGT': '001',
  'JEQ': '010',
  'JGE': '011',
  'JLT': '100',
  'JNE': '101',
  'JLE': '110',
  'JMP': '111',
};

const st = {
  R0: 0,
  R1: 1,
  R2: 2,
  R3: 3,
  R4: 4,
  R5: 5,
  R6: 6,
  R7: 7,
  R8: 8,
  R9: 9,
  R10: 10,
  R11: 11,
  R12: 12,
  R13: 13,
  R14: 14,
  SCREEN: 16384,
  KBD: 24576,
  SP: 0,
  LCL: 1,
  ARG: 2,
  THIS: 3,
  THAT: 4,
};

const a = x => parseInt(x).toString(2).padStart(16, '0');
// C -> dest = comp ; jump -> 111 a c1 c2 3 c4 c5 c6 d1 d2 d3 j1 j2 j3
const c = (line) => {
  const dcj = [0, 0, 0];
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === ' ') {
      continue;
    }
    if (c === '=') {
      dcj[1] = i;
      continue;
    }
    if (c === ';') {
      dcj[2] = i;
      continue;
    }
  }
  const [d, c, j] = dcj;
  return '111' + comp[line.substring(c, j)] + dest[line.substring(0, c)] + jump[j ? line.substring(j + 1) : ''];
};

const parse = source => {
  const lines = [];
  let len = 0;

  for (let line of source.split('\n')) {
    if (line === '' || line[0] === '/') continue;
    if (line[0] === '(') {
      const label = line.substring(1, line.length - 1);
      st[label] = len;
      continue;
    }
    lines.push(line);
    len++;
  }

  let free = 16;
  return lines.map(line => {
    if (line[0] === '@') {
      const val = line.substring(1);
      const symbol = isNaN(parseInt(val));
      if (symbol) {
        st[val] = free++;
        return a(st[val]);
      };
      if (st[val] === undefined) {
        return a(val);
      }
      return a(st[val]);
    }
    return c(line);
  });
};

module.exports = { parse };