const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteAlbumSchema = new Schema({
    favoriteAlbumId: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('FavoriteAlbum', favoriteAlbumSchema)