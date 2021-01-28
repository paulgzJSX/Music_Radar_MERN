import { useQuery } from "react-query"
import Axios from 'axios'

export const useTopTracks = () => {
    return useQuery('top-tracks', async () => {
        const { data } = await Axios.get(process.env.REACT_APP_CHART_URL)
        return data.tracks.data.sort((a, b) => a.position - b.position)
    }, {
        staleTime: Infinity
    })
}

export const useTopTrackAlbum = (albumId) => {
    return useQuery(['album-data', albumId], async () => {
        const { data } = await Axios.get(`${process.env.REACT_APP_ALBUM_URL}${albumId}`)
        return data
    }, {
        staleTime: Infinity
    })
}

export const useTrackOfDay = () => {
    return useQuery('track-of-day', async () => {
        const rand = Math.floor(Math.random() * 6) + 1

        const { data } = await Axios.get(process.env.REACT_APP_CHART_URL)
        const artistPicture = data.artists.data[rand].picture_big
        const artistId = data.artists.data[rand].id
        const res = await Axios.get(`${process.env.REACT_APP_ARTIST_URL}${artistId}/top?limit=1`)
        return {
            artistPicture,
            artistId,
            id: res.data.data[0].id,
            duration: res.data.data[0].duration,
            title: res.data.data[0].title,
            preview: res.data.data[0].preview,
            rank: res.data.data[0].rank,
            album: res.data.data[0].album.title,
            albumCover: res.data.data[0].album.cover_big,
            artistName: res.data.data[0].artist.name,
        }
    })
}
