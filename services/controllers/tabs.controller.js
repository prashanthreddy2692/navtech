

const { Tabs } = require('../sequelize');
const validations = require('../validations-messages');

const tabs = (req, res) => {

    let query = {

    }

    Tabs.findAll({
        where: query,
        attributes: ['id', 'name', 'ui_sref']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.tab_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.tab_list_not_found

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
    tabs
}