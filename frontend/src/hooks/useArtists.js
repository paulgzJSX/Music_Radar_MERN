import { useQuery } from "react-query"
import Axios from 'axios'

export const useTopArtists = () => {
    return useQuery('top-artists', async () => {
        const { data } = await Axios.get(process.env.REACT_APP_CHART_URL)
        const promises = data.artists.data.sort((a, b) => a.position - b.position).map(async artist => {
            const { data: { nb_fan } } = await Axios.get(`${process.env.REACT_APP_ARTIST_URL}${artist.id}`)
            return {
                id: artist.id,
                artistId: artist.id,
                position: artist.position,
                artistName: artist.name,
                cover: artist.picture_big,
                fans: nb_fan
            }
        })
        const settledPromises = await Promise.allSettled(promises)
        return settledPromises.filter(el => el.status !== 'rejected').map(el => el.value)
    }, {
        staleTime: Infinity
    })
}

export const useTopArtistTracks = (artistId) => {
    return useQuery(['top-artist-tracks', artistId], async () => {
        if (artistId) {
            const { data: { data: topArtistTracks } } = await Axios.get(`${process.env.REACT_APP_ARTIST_URL}${artistId}/top?limit=25`)
            return topArtistTracks.map(track => {
                return {
                    id: track.id,
                    title: track.title,
                    rank: track.rank,
                    duration: track.duration,
                    preview: track.preview
                }
            })
        }
    }, {
        staleTime: Infinity
    })
}