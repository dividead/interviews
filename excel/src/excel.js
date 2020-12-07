const fs = require('fs');

class Table {
  constructor({ data, name }) {
    this.data = data;
    this.print = () => console.table(this.data);
    this.print();
    this.rows = data.length - 1;
    this.name = name;
  }
  static load(name) {
    try {
      fs.accessSync(`db/${name}.json`, fs.constants.R_OK | fs.constants.W_OK);
      const data = require(`./db/${name}.json`);
      return new Table({ data, name });
    } catch (error) {
      console.error(error);
    }
  }

  delete_row(n) {
    delete this.data[n];
    this.print();
  }

  delete_col(n) {
    this.data.forEach(row => delete row[n]);
    this.print();
  }

  set(row, col, value) {
    if (row > this.rows) {
      row = this.rows++;
      this.data[row] = {};
    }
    this.data[row][col] = value;
    this.print();
  }

  save() {
    fs.writeFileSync(`./db/${this.name}_${Date.now()}.json`, JSON.stringify(this.data));
  }
}

module.exports = Table;