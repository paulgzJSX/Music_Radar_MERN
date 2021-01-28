import { useState, createContext } from 'react'

export const FavoriteTracksContext = createContext()

const FavoriteTracksContextProvider = (props) => {
    const [albumTracks, setAlbumTracks] = useState()

    return (
        <FavoriteTracksContext.Provider value={{
            albumTracks, setAlbumTracks
        }}>
            {props.children}
        </FavoriteTracksContext.Provider>
    )
}

export default FavoriteTracksContextProvider