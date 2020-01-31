

const { TaskTypes } = require('../sequelize');
const validations = require('../validations-messages');

const tasktypes = (req, res) => {

    let query = {

    }

    TaskTypes.findAll({
        where: query,
        attributes: ['id', 'name']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.task_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.task_list_not_found

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
    tasktypes
}