import React, { memo, useContext } from 'react'
import { updateFavoriteInDb } from '../../hooks/useLogin'
import { UserContext } from '../../context/UserContext'
import { StarIcon, StarContainer } from '../../styles/FavoritesElements'


const Star = memo(React.forwardRef(({ id, type, size }, ref) => {
    const { user, favorites, setFavorites } = useContext(UserContext)

    let url, field = ''

    switch (type) {
        case 'tracks':
            url = !favorites[type].has(id) ? 'addTrack' : 'deleteTrack'
            field = 'track'
            break;

        case 'albums':
            url = !favorites[type].has(id) ? 'addAlbum' : 'deleteAlbum'
            field = 'album'
            break;

        case 'artists':
            url = !favorites[type].has(id) ? 'addArtist' : 'deleteArtist'
            field = 'artist'
            break;

        default:
            break;
    }

    const handleFavorite = () => {
        if (!favorites[type].has(id)) {
            setFavorites({ ...favorites, [type]: new Set(favorites[type].add(id)) })
            user && updateFavoriteInDb(url, field, user, id)
        } else {
            setFavorites({ ...favorites, [type]: new Set([...favorites[type]].filter(favId => favId !== id)) })
            user && updateFavoriteInDb(url, field, user, id)
        }
    }

    return (
        <StarContainer ref={ref}>
            <StarIcon
                color={favorites[type].has(id) ? '#fff' : '#402841'}
                onClick={handleFavorite}
                size={size}
            />
        </StarContainer>
    )
}))

export default Star
