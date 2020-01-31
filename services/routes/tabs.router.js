const {
    tabs
} = require('../controllers/tabs.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/tabs', auth, tabs);

module.exports = router