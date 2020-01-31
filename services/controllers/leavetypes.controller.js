

const { LeaveTypes } = require('../sequelize');
const validations = require('../validations-messages');

const leavetypes = (req, res) => {

    let query = {

    }

    LeaveTypes.findAll({
        where: query,
        attributes: ['id', 'leave_name', 'description']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.leavetype_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.leavetype_list_not_found

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
    leavetypes
}