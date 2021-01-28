import { memo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { FormContainer } from '../../styles/LoginElements'

const YourFavoritesForm = memo(() => {
    const { favorites } = useContext(UserContext)
    let history = useHistory()

    return (
        <FormContainer>
            <button onClick={() => history.push('/favoriteAlbums')}>
                Your Favorite Albums: {favorites.albums.size}
            </button>
            <button onClick={() => history.push('/favoriteArtists')}>
                Your Favorite Artists: {favorites.artists.size}
            </button>
            <button onClick={() => history.push('/favoriteTracks')}>
                Your Favorite Tracks: {favorites.tracks.size}
            </button>
        </FormContainer>
    )
})

export default YourFavoritesForm
