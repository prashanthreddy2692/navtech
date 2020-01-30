const {
    holidays
} = require('../controllers/holidays.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/holidays', auth, holidays);

module.exports = router