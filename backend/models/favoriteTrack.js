const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteTrackSchema = new Schema({
    favoriteTrackId: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('FavoriteTrack', favoriteTrackSchema)