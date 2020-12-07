const { findByID } = require('../models/File');

const email = async (fileId) => {
  try {
    const { recipients, isSigned, url, name } = await findByID(fileId);

    if (isSigned) {
      return;
    }

    const list = recipients.map(subject =>
      console.log(`sending email to ${subject}: "you got your document ${name}"`));
    return Promise.all(list);
  } catch (error) {
    console.error(error);
  }
};


const message = async (fileId) => {
  try {
    const { recipients, isSigned, url, name } = await findByID(fileId);

    if (isSigned) {
      return;
    }

    const list = recipients.map(subject => console.log(`sending message to ${subject}: "you got your document ${name}"`));
    return Promise.all(list);
  } catch (error) {
    console.error(error);
  }
};


module.exports = { email, message };