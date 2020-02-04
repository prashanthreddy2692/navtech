const {
    projects
} = require('../controllers/projects.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/projects', auth, projects);

module.exports = router