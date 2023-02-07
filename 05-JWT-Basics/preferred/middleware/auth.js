const jwt = require('jsonwebtoken')

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No token provided')
        res.status(401).send('Unauthorized')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send('Not authorized to access this route')
    }
}

module.exports = authenticationMiddleware
