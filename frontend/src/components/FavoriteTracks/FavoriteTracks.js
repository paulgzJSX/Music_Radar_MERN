import { FavoriteTrackRow } from '../../components'
import { FavoritesTracksContainer } from '../../styles/FavoritesElements'

const FavoriteTracks = ({ favoriteTracks }) => {
    return (
        <FavoritesTracksContainer>
            {favoriteTracks?.map((track, idx) =>
                <FavoriteTrackRow
                    key={track.id}
                    track={track}
                    position={idx + 1}
                />)}
        </FavoritesTracksContainer>
    )
}

export default FavoriteTracks
