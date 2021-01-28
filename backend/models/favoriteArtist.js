const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteArtistSchema = new Schema({
    favoriteArtistId: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('FavoriteArtist', favoriteArtistSchema)