

const { Orders } = require('../sequelize');
const validations = require('../validations-messages');

const orders = (req, res) => {
    let query = {

    }

    Orders.findAll({
        where: query,
        attributes: ['id', 'order_no', 'due_date', 'customer', 'address', 'phone', 'order_total']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.order_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.order_list_not_found

                });
            }
        })
        .catch(error => {
            console.log(error)
            return res.status(200).json({
                error: true,
                message: error.message
            });
        });
}

const orderCreate = (req, res) => {

    let phone = req.body.phone;
    let total = Number(req.body.order_total);

    if (!total) {
        return res.status(200).json({
            error: true,
            message: 'Order Total Must Be a Number!'
        });
    }

    if (phone.length != 10) {
        return res.status(200).json({
            error: true,
            message: 'Mobile Must Be 10 Digit Number!'
        });
    }

    Orders.create({
        order_no: req.body.order_no,
        due_date: req.body.due_date,
        customer: req.body.customer,
        address: req.body.address,
        phone: req.body.phone,
        order_total: req.body.order_total
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.order_create_success,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.order_create_fail
                });
            }
        })
        .catch(error => {
            console.log(error)
            return res.status(200).json({
                error: true,
                message: error.message
            });
        });
}

const orderInfo = (req, res) => {

    let query = {
        id: req.params.id
    }

    Orders.findOne({
        where: query,
        attributes: ['id', 'order_no', 'due_date', 'customer', 'address', 'phone', 'order_total']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.order_info_success,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.order_info_fail
                });
            }
        })
        .catch(error => {
            console.log(error)
            return res.status(200).json({
                error: true,
                message: error.message
            });
        });
}

const orderUpdate = (req, res) => {

    let query = {
        id: req.params.id
    }

    let updateObject = req.body;

    Orders.update(
        updateObject,
        {
            where: query
        })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.order_update_success,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.order_update_fail
                });
            }
        })
        .catch(error => {
            console.log(error)
            return res.status(200).json({
                error: true,
                message: error.message
            });
        });
}

const orderDelete = (req, res) => {

    let query = {
        id: req.params.id
    }

    Orders.destroy(
        {
            where: query
        })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.order_delete_success,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.order_delete_fail,
                });
            }
        })
        .catch(error => {
            console.log(error)
            return res.status(200).json({
                error: true,
                message: error.message
            });
        });
}




module.exports = {
    orders,
    orderCreate,
    orderInfo,
    orderUpdate,
    orderDelete
}