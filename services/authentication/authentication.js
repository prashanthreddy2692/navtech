require('dotenv').config();
const { verify } = require('jsonwebtoken');
const key = process.env.JWT_KEY

const auth = (req, res, next) => {
    let token = req.get('authorization');
    
    if (token) {
        token = token.slice(7);

        verify(token, key, (err, decode) => {
          /*   console.log(decode) */
            if (err) {
                return res.status(400).json({
                    success: 0,
                    message: 'Invalid token!'
                })
            }
            next()
        })
    } else {
        return res.status(200).json({
            success: 0,
            message: 'Access denied! unauthorized user'
        })
    }
}

module.exports = auth;