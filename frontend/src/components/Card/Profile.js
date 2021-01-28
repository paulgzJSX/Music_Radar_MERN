import { memo, useContext } from 'react'
import RelatedArtistsList from '../Card/RelatedArtistsList'
import { trimDate, trimNumber, limitCharacters } from '../../helpers/helpers'
import { TopArtistsContext } from '../../context/TopArtistsContext'
import { ProfileSection, ArtistData, ArtistName, BlackLine, Rank, AlbumName } from '../../styles/CardElements'


const Profile = memo(({ context, artistId }) => {
    const { selectedAlbum } = useContext(context)

    const albumName = context !== TopArtistsContext
        ? selectedAlbum && selectedAlbum.artistName + ' - ' + selectedAlbum.title
        : selectedAlbum && selectedAlbum.artistName

    return (
        <>
            {selectedAlbum &&
                <ProfileSection>
                    <ArtistData>
                        <ArtistName>{limitCharacters(albumName, 42)}</ArtistName>
                        <BlackLine />
                        {context !== TopArtistsContext &&
                            <AlbumName>Release Date: {trimDate(selectedAlbum.releaseDate)}</AlbumName>}
                    </ArtistData>
                    <RelatedArtistsList artistId={artistId} context={context} />
                    <Rank>Fans: {trimNumber(selectedAlbum.fans)}</Rank>
                </ProfileSection>
            }
        </>
    )
})

export default Profile
