const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req, res) => {
    const { username, password } = req.body


    if (!username || !password) {
        console.log('!!! Bad request 400 !!!')
        res.status(400).send('Bad request 400. Please provide username and password')
    }

    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    })

    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}

module.exports = {
    login,
    dashboard,
}