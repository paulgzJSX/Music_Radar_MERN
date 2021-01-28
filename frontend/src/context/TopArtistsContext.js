import { useState, createContext } from 'react'

export const TopArtistsContext = createContext()

const TopArtistsContextProvider = (props) => {
    const [selectedAlbum, setSelectedAlbum] = useState()
    const [albumTracks, setAlbumTracks] = useState()

    return (
        <TopArtistsContext.Provider value={{
            selectedAlbum, setSelectedAlbum,
            albumTracks, setAlbumTracks,
        }}>
            {props.children}
        </TopArtistsContext.Provider>
    )
}

export default TopArtistsContextProvider