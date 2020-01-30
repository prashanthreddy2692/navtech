const {
    designations
} = require('../controllers/designations.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/designations', auth, designations);

module.exports = router