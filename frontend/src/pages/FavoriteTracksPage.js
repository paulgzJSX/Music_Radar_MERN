import { memo, useContext, useEffect } from 'react'
import { useFavoriteTracks } from '../hooks/useFavorites'
import { Cover, FavoriteTracks, Loader, RelatedArtistsList } from '../components'
import { trimDate, trimNumber } from '../helpers/helpers'
import { UserContext } from '../context/UserContext'
import { FavoriteTracksContext } from '../context/FavoriteTracksContext'
import { AudioContext } from '../context/AudioContext'
import { FavoritesGridPage } from '../styles/FavoritesElements'
import { ProfileSection, ArtistData, ArtistName, BlackLine, AlbumName, Rank } from '../styles/CardElements'


const FavoriteTracksPage = memo(() => {
    const { favorites } = useContext(UserContext)
    const { setSelectedTrack, selectedTrack } = useContext(AudioContext)
    const { setAlbumTracks } = useContext(FavoriteTracksContext)

    const { isLoading, data: favoriteTracks } = useFavoriteTracks([...favorites.tracks])
    

    useEffect(() => {
        if (favoriteTracks) {
            setAlbumTracks(favoriteTracks)
            setSelectedTrack(favoriteTracks[0])
        }
    }, [favoriteTracks])

    return (
        <>
            {isLoading
                ? <Loader />
                : <FavoritesGridPage>
                    {selectedTrack &&
                        <div>
                            <Cover context={FavoriteTracksContext} />
                            <ProfileSection>
                                <ArtistData>
                                    <ArtistName>{selectedTrack.artistName} - {selectedTrack.albumTitle}</ArtistName>
                                    <BlackLine />
                                    <AlbumName>Release Date: {trimDate(selectedTrack.albumReleaseDate)}</AlbumName>
                                </ArtistData>
                                <RelatedArtistsList artistId={selectedTrack.artistId} />
                                <Rank>Fans: {trimNumber(selectedTrack.rank)}</Rank>
                            </ProfileSection>
                        </div>}
                    <FavoriteTracks favoriteTracks={favoriteTracks} />
                </FavoritesGridPage>}
        </>
    )
})

export default FavoriteTracksPage
