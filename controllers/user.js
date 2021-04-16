const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.registration = async (req, res, next) => {
    try {
        const errors = validationResult(req).formatWith((err) => err.msg);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.mapped());
        }

        const user = await User.create(req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
};
