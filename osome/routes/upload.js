const { create } = require('../services/document');

const upload = async (req, res, next) => {
  try {
    const { body } = req;
    const { recipients = [], url } = body;

    if (!recipients.length || !url) {
      return next(Error('empty recipients list or url'));
    }

    const doc = await create(req.body);

    return res.json(doc);
  } catch (error) {
    return next(error);
  }
};


module.exports = upload;