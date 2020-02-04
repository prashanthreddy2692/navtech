

const { AllStatus } = require('../sequelize');
const validations = require('../validations-messages');

const allstatus = (req, res) => {

    let query = {

    }

    AllStatus.findAll({
        where: query,
        /* attributes: ['id', 'name'] */
    })
        .then(response => {

            if (response) {
                console.log(response)
                res.status(200).json({
                    error: false,
                    message: validations.status_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.status_list_not_found

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
    allstatus
}