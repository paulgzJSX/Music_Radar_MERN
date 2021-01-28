const bcrypt = require('bcryptjs')
const User = require('../models/user')

module.exports = {
    register: (req, res) => {
        const { email, password } = req?.body

        if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
            res.send('Improper values')
            return
        }

        User.findOne({ email }, async (err, doc) => {
            if (err) throw err
            if (doc) res.send('User already exists')
            if (!doc) {
                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = new User({
                    email,
                    password: hashedPassword
                })
                await newUser.save()
                res.status(201).send('Success')
            }
        })
    },

    login: (req, res) => {
        res.send(req.user)
    },

    getUser: (req, res) => {
        res.send(req.user)
    },

    logout: (req, res) => {
        req.logout()
        res.send('Logged out')
    }
}