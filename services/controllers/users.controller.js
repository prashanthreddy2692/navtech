var md5 = require('md5');

const { Users } = require('../sequelize');
const { sign } = require('jsonwebtoken');
const validations = require('../validations-messages');

const login = (req, res) => {

    const { email, password } = req.body;
    Users.findAll({
        attributes: ['id', 'name', 'emailid'],
        where: {
            emailid: email,
            password: md5(password)
        },
        raw: true
    })
        .then(response => {

            let user_details = response[0];

            const jsonwebtoken = sign({ user: user_details }, process.env.JWT_KEY, {
                expiresIn: '1h'
            })

            if (response.length > 0) {
                res.status(200).json({
                    error: false,
                    message: validations.login_success,
                    token: jsonwebtoken,
                    //  data: (response.length > 0) ? response[0] : {}
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.login_fail

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


const users = (req, res) => {

    let query = {
        status: req.query.status
    }
    if (req.query.status == 2) {
        query = {}
    }
    Users.findAll({ where: query })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.user_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.user_list_not_found

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

const userInfo = (req, res) => {

    let query = {
        id: req.body.userid
    }

    Users.findOne({ where: query })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.user_details_found,
                    data: response,
                    //count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.user_details_not_found

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
    login,
    users,
    userInfo
}