const {
    leavetypes
} = require('../controllers/leavetypes.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/leavetypes', auth, leavetypes);

module.exports = router