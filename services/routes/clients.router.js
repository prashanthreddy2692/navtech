const {
    clients
} = require('../controllers/clients.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/clients', auth, clients);

module.exports = router