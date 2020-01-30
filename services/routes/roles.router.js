const {
    roles
} = require('../controllers/roles.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/roles', auth, roles);

module.exports = router