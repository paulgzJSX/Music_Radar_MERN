import { useQuery } from "react-query"
import Axios from 'axios'

export const useFavoriteAlbums = arr => {
    return useQuery(['favorite-albums', arr], async () => {
        const promises = arr.map(async (albumId) => {
            const { data } = await Axios.get(`${process.env.REACT_APP_ALBUM_URL}${albumId}`)
            return {
                id: data.id,
                title: data.title,
                cover: data.cover_big,
                genreId: data.genre_id,
                releaseDate: data.release_date,
                fans: data.fans,
                tracklist: data.tracklist,
                artistId: data.artist.id,
                artistName: data.artist.name,
                artistPicture: data.artist.picture_big,
                numOfTracks: data.nb_tracks
            }
        })
        const settledPromises = await Promise.allSettled(promises)
        return settledPromises.filter(el => el.status !== 'rejected').map(el => el.value)
    }, {
        staleTime: Infinity
    })
}

export const useFavoriteTracks = arr => {
    return useQuery(['favorite-tracks', arr], async () => {
        const promises = arr.map(async (trackId) => {
            const { data } = await Axios.get(`${process.env.REACT_APP_TRACK_URL}${trackId}`)
            return {
                id: data.id,
                title: data.title,
                releaseDate: data.release_date,
                preview: data.preview,
                rank: data.rank,
                gain: data.gain,
                duration: data.duration,
                artistId: data.artist.id,
                artistName: data.artist.name,
                artistPicture: data.artist.picture_big,
                artistTracklist: data.artist.tracklist,
                albumTitle: data.album.title,
                albumReleaseDate: data.album.release_date,
                albumTracklist: data.album.tracklist,
                albumCover: data.album.cover_big
            }
        })
        const settledPromises = await Promise.allSettled(promises)
        const newArr = settledPromises
            .filter(el => el.status !== 'rejected')
            .map(el => el.value)
            .sort((a, b) => a.artistName.localeCompare(b.artistName))

        return newArr
    }, {
        staleTime: Infinity
    })
}

export const useFavoriteArtists = arr => {
    return useQuery(['favorite-artists', arr], async () => {
        const promises = arr.map(async (artistId) => {
            const { data } = await Axios.get(`${process.env.REACT_APP_ARTIST_URL}${artistId}`)
            return {
                artistId: data.id,
                artistName: data.name,
                cover: data.picture_big,
                tracklist: data.tracklist,
                fans: data.nb_fan
            }
        })
        const settledPromises = await Promise.allSettled(promises)
        return settledPromises.filter(el => el.status !== 'rejected').map(el => el.value)
    }, {
        staleTime: Infinity
    })
}