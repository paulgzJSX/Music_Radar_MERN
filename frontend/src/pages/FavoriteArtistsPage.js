import { useContext } from 'react'
import GenericPage from './GenericPage'
import { useFavoriteArtists } from '../hooks/useFavorites'
import { useTopArtistTracks } from '../hooks/useArtists'
import { UserContext } from '../context/UserContext'
import { TopArtistsContext } from '../context/TopArtistsContext'


const FavoriteArtistsPage = () => {
    const { favorites } = useContext(UserContext)
    const { selectedAlbum } = useContext(TopArtistsContext)

    return (
        <GenericPage
            context={TopArtistsContext}
            albumsHook={useFavoriteArtists}
            albumsParam={[...favorites.artists]}
            tracksHook={useTopArtistTracks}
            tracksParam={selectedAlbum?.artistId}
            artistId={selectedAlbum?.artistId}
        />
    )
}

export default FavoriteArtistsPage
