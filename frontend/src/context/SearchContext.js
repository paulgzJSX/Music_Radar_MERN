import { useState, createContext } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
    const [selectedArtistId, setSelectedArtistId] = useState()
    const [relatedArtists, setRelatedArtists] = useState([])
    const [albumTracks, setAlbumTracks] = useState()
    const [selectedAlbum, setSelectedAlbum] = useState()
    const [albums, setAlbums] = useState()

    return (
        <SearchContext.Provider value={{
            selectedArtistId, setSelectedArtistId,
            relatedArtists, setRelatedArtists,
            albumTracks, setAlbumTracks,
            selectedAlbum, setSelectedAlbum,
            albums, setAlbums
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider