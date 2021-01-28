const express = require('express')
const expressSession = require('express-session')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const passport = require('passport')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config()
require('./passportConfig')(passport)

mongoose.connect('mongodb+srv://music_radar:NEWSnow24021949@cluster0.anhah.mongodb.net/music_radar?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Connected to Mongo DB'))
    .catch(err => console.log(err.message))

const PORT = process.env.PORT || 4000
const app = express()

// -------------------- MIDDLEWARE ---------------------------------

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(cookieParser('secretCode'))
app.use(expressSession({
    secret: 'secretCode',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(require('./routes'))

// -------------------- END OF MIDDLEWARE -------------------------

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))