import { useContext } from 'react'
import { Star, TopTrackPlayer, TopTrackBriefs } from '../../components'
import { TracksContext } from '../../context/TracksContext'
import { ArtistCard, Header, PlusIcon, TopTrackCardContainer, CoverSection, ArtistData, ArtistImage, ArtistName, TrackTitle } from '../../styles/TopTrackCardElements'


const TopTrackDescriptionCard = () => {
    const { selectedTrack, album } = useContext(TracksContext)

    return (
        <TopTrackCardContainer>
            <CoverSection backgroundImage={selectedTrack && selectedTrack.album.cover_big}>
                <ArtistCard>
                    <Header>
                        <Star id={selectedTrack.id} type={'tracks'} />
                        <PlusIcon />
                    </Header>
                    {selectedTrack &&
                        <ArtistData>
                            <ArtistImage src={selectedTrack.artist.picture_big} alt={selectedTrack.title} />
                            <ArtistName>{selectedTrack.artist.name}</ArtistName>
                            <TrackTitle>{selectedTrack.title}</TrackTitle>
                        </ArtistData>}
                </ArtistCard>

                {album && <TopTrackBriefs />}
            </CoverSection>

            {selectedTrack && <TopTrackPlayer />}
        </TopTrackCardContainer>
    )
}

export default TopTrackDescriptionCard 
