

const { Milestones } = require('../sequelize');
const validations = require('../validations-messages');

const milestones = (req, res) => {

    let query = {
        project_id: req.body.project_id
    }

    Milestones.findAll({
        where: query,
        attributes: ['id', 'milestone']
    })
        .then(response => {

            if (response) {
                res.status(200).json({
                    error: false,
                    message: validations.milestone_list_found,
                    data: response,
                    count: response.length
                });
            } else {
                return res.status(200).json({
                    error: true,
                    message: validations.milestone_list_not_found

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
    milestones
}