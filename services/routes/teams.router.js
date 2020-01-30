const {
    teams
} = require('../controllers/teams.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/teams', auth, teams);

module.exports = router