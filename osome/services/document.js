const { create: createFile } = require('../models/File');
const uploadFile = require('../services/upload');
const send = require('../services/message');


const create = async ({ name, recipients = [], url }) => {
  const new_url = await uploadFile(url);
  const file = await createFile({ name, recipients, url: new_url });

  setTimeout(() => send.email(file.id), 1 * 1000);
  setTimeout(() => send.message(file.id), 2 * 1000);

  return file.toJSON();
};



module.exports = { create };