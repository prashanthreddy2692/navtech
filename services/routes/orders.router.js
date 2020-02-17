const {
    orders, orderCreate, orderInfo, orderUpdate, orderDelete
} = require('../controllers/orders.controller');

const router = require('express').Router();

const auth = require('../authentication/authentication');

router.get('/orders', auth, orders);
router.post('/order', auth, orderCreate);
router.get('/order/:id', auth, orderInfo);
router.put('/order/:id', auth, orderUpdate);
router.get('/orderdelete/:id', auth, orderDelete);

module.exports = router