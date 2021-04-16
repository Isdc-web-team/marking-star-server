const { registration } = require('../controllers/user');
const { registrationValidator } = require('../validators/user');
const router = require('express').Router();

router.post('/sign-up', registrationValidator, registration);

module.exports = router;
