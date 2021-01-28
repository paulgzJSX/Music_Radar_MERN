import { useQuery } from "react-query"
import Axios from 'axios'

export const useTopAlbums = () => {
    return useQuery('top-albums', async () => {
        const { data } = await Axios.get(process.env.REACT_APP_CHART_URL)
        const promises = data.albums.data.sort((a, b) => a.position - b.position).map(async album => {
            const { data: { fans, release_date } } = await Axios.get(`${process.env.REACT_APP_ALBUM_URL}${album.id}`)
            return {
                id: album.id,
                title: album.title,
                cover: album.cover_big,
                position: album.position,
                artistId: album.artist.id,
                artistName: album.artist.name,
                artistPicture: album.artist.picture_big,
                releaseDate: release_date,
                fans
            }
        })
        const settledPromises = await Promise.allSettled(promises)
        return settledPromises.filter(el => el.status !== 'rejected').map(el => el.value)
    }, {
        staleTime: Infinity
    })
}

export const useTopAlbumTracks = (albumId) => {
    return useQuery(['top-album-tracks', albumId], async () => {
        if (albumId) {
            const { data } = await Axios.get(`${process.env.REACT_APP_ALBUM_URL}${albumId}/tracks`)
            return data.data.map(track => {
                return {
                    id: track.id,
                    title: track.title,
                    position: track.track_position,
                    rank: track.rank,
                    diskNumber: track.disk_number,
                    duration: track.duration,
                    preview: track.preview
                }
            })
        }

    }, {
        staleTime: Infinity
    })
}