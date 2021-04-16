const Review = require('../models/Review');

exports.getReviews = async (req, res, next) => {
    try {
        res.send({
            message: 'Working',
        });
    } catch (err) {
        next(err);
    }
};

exports.getReview = async (req, res, next) => {
    try {
        res.send({
            message: 'Working',
        });
    } catch (err) {
        next(err);
    }
};

exports.createReview = async (req, res, next) => {
    try {
        const review = await Review.create(req.body);
        res.status(201).send({
            message: 'Review created successfully',
            data: review,
        });
    } catch (err) {
        next(err);
    }
};

exports.updateReview = async (req, res, next) => {
    try {
        res.send({
            message: 'Working',
        });
    } catch (err) {
        next(err);
    }
};

exports.deleteReview = async (req, res, next) => {
    try {
        res.send({
            message: 'Working',
        });
    } catch (err) {
        next(err);
    }
};
