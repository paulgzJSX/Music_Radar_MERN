const User = require('../models/user')

module.exports = {
    addArtist: (req, res) => {
        User.updateOne({ _id: req?.user._id },
            { $push: { artists: req?.body.artist } },
            { safe: true, upsert: true },
            (err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send('Artist successfully added')
                }
            }
        )
    },

    deleteArtist: (req, res) => {
        User.findById({ _id: req?.user._id }, async (err, doc) => {
            if (err) {
                res.send('User not found')
            } else {
                doc.artists.pull(req.body.artist)
                const result = await doc.save()
                if (result) {
                    res.send('Artist successfully removed')
                } else {
                    res.send('Error deleting the artist')
                }
                
            }
        })
    },

    getArtists: (req, res) => {
        User.findById({ _id: req?.user._id }, async (err, doc) => {
            if (err) {
                res.send('User not found')
            } else {
                res.send(doc.artists)
            }
        })
    }
}