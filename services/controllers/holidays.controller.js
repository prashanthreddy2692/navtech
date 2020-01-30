

const { Holidays } = require('../sequelize');
const validations = require('../validations-messages');

const holidays = (req, res) => {

    let query = {

    }

    Holidays.findAll({
        where: query,
        attributes: ['id', 'holiday_name', 'date', 'added_by', 'country', 'is_active']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.holiday_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.holiday_list_not_found

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
    holidays
}