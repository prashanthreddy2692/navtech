const { 
    login, 
    users, 
} = require('../controllers/users.controller');
const router = require('express').Router();

router.post('/login', login);
//router.get('/', auth, users);
//router.get('/:email', auth, users);
module.exports = router