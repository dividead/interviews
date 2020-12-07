const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  recipients: Array,
  url: String,
  isSigned: Boolean,
});

const File = mongoose.model('File', fileSchema);

const create = (data) => {
  const file = new File({ ...data, isSigned: false });

  return file.save();
};

const findByID = (id) => {
  return File.findById(id);
};

module.exports = { create, findByID };