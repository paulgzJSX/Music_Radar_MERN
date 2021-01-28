const bcrypt = require('bcryptjs')
const passport = require('passport')
const User = require('./models/user')

const LocalStrategy = require('passport-local').Strategy

module.exports = function (passport) {
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
        User.findOne({ email }, (err, user) => {
            if (err) return done(err)
            if (!user) return done(null, false)
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err
                if (result === true) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            })
        })
    }
    ))

    passport.serializeUser((user, cb) => {
        cb(null, user._id)
    })

    passport.deserializeUser((id, cb) => {
        User.findById({ _id: id }, (err, user) => {
            cb(err, user)
        })
    })
}