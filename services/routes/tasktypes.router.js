const {
    tasktypes
} = require('../controllers/tasktypes.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/tasktypes', auth, tasktypes);

module.exports = router