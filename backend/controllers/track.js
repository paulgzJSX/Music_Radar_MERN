const User = require('../models/user')

module.exports = {
    addTrack: (req, res) => {
        User.updateOne({ _id: req?.user._id },
            { $push: { tracks: req?.body.track } },
            { safe: true, upsert: true },
            (err, doc) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send('Track successfully added')
                }
            }
        )
    },

    deleteTrack: (req, res) => {
        User.findById({ _id: req?.user._id }, async (err, doc) => {
            if (err) {
                res.send('User not found')
            } else {
                doc.tracks.pull(req.body.track)
                const result = await doc.save()
                if (result) {
                    res.send('Track successfully removed')
                } else {
                    res.send('Error deleting the track')
                }
                
            }
        })
    },

    getTracks: (req, res) => {
        User.findById({ _id: req?.user._id }, async (err, doc) => {
            if (err) {
                res.send('User not found')
            } else {
                res.send(doc.tracks)
            }
        })
    }
}