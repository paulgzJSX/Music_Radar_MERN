import { useContext, useEffect } from 'react'
import { AudioContext } from '../context/AudioContext'

export const useDataSetup = (context, albumsHook, albumsParam, tracksHook, tracksParam) => {
    const { clearAudioOnMount, setSelectedTrack } = useContext(AudioContext)
    const { setAlbumTracks, setSelectedAlbum } = useContext(context)

    const { isLoading: albumsLoading, data: albums } = albumsHook(albumsParam)
    const { isLoading: tracksLoading, data: albumTracks } = tracksHook(tracksParam)

    useEffect(() => clearAudioOnMount(), [])

    useEffect(() => {
        if (albums) {
            setSelectedAlbum(albums[0])
        }
    }, [albums])

    useEffect(() => {
        if (albumTracks) {
            setAlbumTracks(albumTracks)
            setSelectedTrack(albumTracks[0])
        }
    }, [albumTracks])

    return {
        albums,
        albumTracks,
        albumsLoading,
        tracksLoading, 
    }
}