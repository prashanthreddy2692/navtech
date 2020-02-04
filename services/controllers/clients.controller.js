

const { Clients } = require('../sequelize');
const validations = require('../validations-messages');

const clients = (req, res) => {

    let query = {

    }

    Clients.findAll({
        where: query,
        attributes: ['id', 'name', 'address', 'contact_num_json', 'emailid_json']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.client_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.client_list_not_found

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
    clients
}