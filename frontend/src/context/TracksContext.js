import { useEffect, useState, createContext } from 'react'
import { useTopTracks, useTopTrackAlbum, useTrackOfDay } from '../hooks/useTopTracks'

export const TracksContext = createContext()

const TracksContextProvider = (props) => {
    const [topTracks, setTopTracks] = useState()
    const [selectedTrack, setSelectedTrack] = useState()
    const [album, setAlbum] = useState()
    const [trackOfDay, setTrackOfDay] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const { isLoading: topTracksDataLoading, data: topTracksData } = useTopTracks()
    const { isLoading: topAlbumDataLoading, data: albumData } = useTopTrackAlbum(selectedTrack && selectedTrack.album.id)
    const { isLoading: trackOfDayLoading, data: trackOfDayData } = useTrackOfDay()

    useEffect(() => {
        if (topTracksData) {
            setTopTracks(topTracksData)
            setSelectedTrack(topTracksData[0])
            if (!topAlbumDataLoading && !trackOfDayLoading) {
                setIsLoading(false)
            }
        } 
    }, [topTracksData])

    useEffect(() => {
        if (selectedTrack && albumData) {
            setAlbum(albumData)
            if (!topTracksDataLoading && !trackOfDayLoading) {
                setIsLoading(false)
            }
        } 
    }, [albumData])

    useEffect(() => {
        trackOfDayData && setTrackOfDay(trackOfDayData)
        if (!topTracksDataLoading && !topAlbumDataLoading) {
            setIsLoading(false)
        }
    }, [trackOfDayData])

    return (
        <TracksContext.Provider value={{
            selectedTrack, setSelectedTrack,
            topTracks, setTopTracks,
            album, setAlbum,
            trackOfDay,
            isLoading
        }}>
            {props.children}
        </TracksContext.Provider>
    )
}

export default TracksContextProvider
