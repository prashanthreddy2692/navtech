

const { Projects } = require('../sequelize');
const validations = require('../validations-messages');

const projects = (req, res) => {

    let query = {

    }

    Projects.findAll({
        where: query,
        /* attributes: ['id', 'project_id', 'name', 'estimate_start_date', 'estimate_end_date',
         'actual_start_date', 'actual_end_date', 'description', 'project_owner', 'client_id'] */
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.project_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.project_list_not_found

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
    projects
}