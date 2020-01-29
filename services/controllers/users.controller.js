var md5 = require('md5');

const { Users } = require('../sequelize');
const { sign } = require('jsonwebtoken');

const login = (req, res) => {

    const { email, password } = req.body;
    Users.findAll({
        where: {
            emailid: email,
            password: md5(password)
        },
        include: [{
            model: Designations,
            as: 'designation',
            attributes: ['name']

        }]
    })
        .then(response => {

            const jsonwebtoken = sign({ result: req.body }, process.env.JWT_KEY, {
                expiresIn: '1h'
            })

            if (response.length > 0) {
                res.status(200).json({
                    error: false,
                    message: "Logged in Successfully",
                    token: jsonwebtoken,
                    data: (response.length > 0) ? response[0] : {}
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: 'User Not Found'

                });
            }
        })
        .catch(error => {
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
                    message: "Users List",
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: 'Users List Not Found'

                });
            }
        })
        .catch(error => {
            return res.status(200).json({
                error: true,
                message: error.message
            });
        });
}



module.exports = {
    login,
    users
}