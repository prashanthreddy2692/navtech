const {
    login,
    users,
} = require('../controllers/users.controller');

const router = require('express').Router();
const auth = require('../authentication/authentication');

router.post('/login', login);
router.get('/user-list', auth, users);
//router.get('/:email', auth, users);
module.exports = router