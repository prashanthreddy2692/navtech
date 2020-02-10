const {
    milestones
} = require('../controllers/milestones.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/milestones', auth, milestones);

module.exports = router