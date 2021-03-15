import { useQuery } from "react-query"
import Axios from 'axios'

export const useSearchAlbums = artistId => {
    return useQuery(['search-artist-albums', artistId], async () => {
        const { data: artistData } = await Axios.get(`${process.env.REACT_APP_ARTIST_URL}${artistId}`)

        const numOfAlbums = artistData.nb_album
        const artistName = artistData.name
        const artistPicture = artistData.picture_big

        const { data: { data: searchAlbums } } = await Axios.get(`${process.env.REACT_APP_ARTIST_URL}${artistId}/albums/?index=0&limit=${numOfAlbums}`)
        return searchAlbums.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).map(album => {
            return {
                id: album.id,
                title: album.title,
                cover: album.cover_big,
                genreId: album.genre_id,
                releaseDate: album.release_date,
                fans: album.fans,
                tracklist: album.tracklist,
                artistName,
                artistPicture,
                numOfAlbums
            }
        })
    }, {
        staleTime: Infinity
    })
}

export const useSearchAlbumTracks = tracklist => {
    return useQuery(['selected-artist-tracks', tracklist], async () => {
        const { data: { data: searchAlbumTracks } } = await Axios.get(tracklist)
        return searchAlbumTracks.sort((a, b) => a.track_position - b.track_position).map(track => {
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
    }, {
        staleTime: Infinity
    })
}

export const useRelatedArtists = artistId => {
    return useQuery(['related-artists', artistId], async () => {
        if (artistId) {
            const { data: { data: relatedArtists } } = await Axios.get(`${process.env.REACT_APP_ARTIST_URL}${artistId}/related`)
            return relatedArtists.map(artist => {
                return {
                    id: artist.id,
                    name: artist.name,
                    numOfAlbums: artist.nb_album,
                    numOfFans: artist.nb_fan,
                    artistPicture: artist.picture_big
                }
            })
        }
    }, {
        staleTime: Infinity
    })
}

export const fetchSearchResults = async (value, term) => {
    const { data: { data: searchResults } } = await Axios.get(`${process.env.REACT_APP_SEARCH_ARTIST_URL}${value.toLowerCase()}&limit=10`)
    return searchResults.map(artist => {
        return {
            id: artist.id,
            name: artist.name.toLowerCase()
        }
    }).filter(item => item.name.startsWith(term))
}