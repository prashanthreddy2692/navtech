const {
    allstatus
} = require('../controllers/status.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/allstatus', auth, allstatus);

module.exports = router