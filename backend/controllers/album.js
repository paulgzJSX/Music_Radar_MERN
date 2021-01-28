const User = require('../models/user')

module.exports = {
    addAlbum: (req, res) => {
        User.updateOne({ _id: req?.user._id },
            { $push: { albums: req?.body.album } },
            { safe: true, upsert: true },
            (err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send('Album successfully added')
                }
            }
        )
    },

    deleteAlbum: (req, res) => {
        User.findById({ _id: req?.user._id }, async (err, doc) => {
            if (err) {
                res.send('User not found')
            } else {
                doc.albums.pull(req.body.album)
                const result = await doc.save()
                if (result) {
                    res.send('Album successfully removed')
                } else {
                    res.send('Error deleting the album')
                }
            }
        })
    },

    getAlbums: (req, res) => {
        User.findById({ _id: req?.user._id }, async (err, doc) => {
            if (err) {
                res.send('User not found')
            } else {
                res.send(doc.albums)
            }
        })
    }
}