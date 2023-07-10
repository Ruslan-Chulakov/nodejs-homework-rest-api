const { Contact, addSchema } = require('../models/contact')
const { HttpError } = require('../helpers');

const add = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { _id: owner } = req.user;
    const result = await Contact.create({...req.body, owner});
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;