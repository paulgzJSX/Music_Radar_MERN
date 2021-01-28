const express = require('express')
const router = new express.Router
const passport = require('passport')
const User = require('./controllers/user')
const Album = require('./controllers/album')
const Artist = require('./controllers/artist')
const Track = require('./controllers/track')

router.get('/home', (_, res) => {
    res.send('Hello from server')
})

router.post('/register', User.register)
router.get('/user', User.getUser)
router.post('/login', passport.authenticate('local'), User.login)
router.get('/logout', User.logout)

router.post('/addAlbum', Album.addAlbum)
router.post('/deleteAlbum', Album.deleteAlbum)
router.get('/getAlbums', Album.getAlbums)

router.post('/addArtist', Artist.addArtist)
router.post('/deleteArtist', Artist.deleteArtist)
router.get('/getArtists', Artist.getArtists)

router.post('/addTrack', Track.addTrack)
router.post('/deleteTrack', Track.deleteTrack)
router.get('/getTracks', Track.getTracks)

module.exports = router