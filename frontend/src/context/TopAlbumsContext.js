import { useState, createContext } from 'react'

export const TopAlbumsContext = createContext()

const TopAlbumsContextProvider = (props) => {
    const [selectedArtistId, setSelectedArtistId] = useState()
    const [selectedAlbum, setSelectedAlbum] = useState()
    const [albumTracks, setAlbumTracks] = useState()

    return (
        <TopAlbumsContext.Provider value={{
            selectedArtistId, setSelectedArtistId,
            selectedAlbum, setSelectedAlbum,
            albumTracks, setAlbumTracks
        }}>
            {props.children}
        </TopAlbumsContext.Provider>
    )
}

export default TopAlbumsContextProvider