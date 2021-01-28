import { useContext } from 'react'
import GenericPage from './GenericPage'
import { useFavoriteAlbums } from '../hooks/useFavorites'
import { useSearchAlbumTracks } from '../hooks/useSearch'
import { SearchContext } from '../context/SearchContext'
import { UserContext } from '../context/UserContext'


const FavoriteAlbums = () => {
    const { favorites } = useContext(UserContext)
    const { selectedAlbum } = useContext(SearchContext)

    return (
        <GenericPage
            context={SearchContext}
            albumsHook={useFavoriteAlbums}
            albumsParam={[...favorites.albums]}
            tracksHook={useSearchAlbumTracks}
            tracksParam={selectedAlbum && selectedAlbum.tracklist}
            artistId={selectedAlbum && selectedAlbum.artistId}
        />
    )
}

export default FavoriteAlbums
