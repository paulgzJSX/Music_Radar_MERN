import { useContext } from 'react'
import TopTrack from './TopTrack'
import { TracksContext } from '../../context/TracksContext'
import { GridContainer } from '../../styles/LeftGridElements'

const TopTracksList = () => {
    const { topTracks } = useContext(TracksContext)

    return (
        <GridContainer>
            {topTracks?.map(track => 
                <TopTrack key={track.id} track={track} />)}
        </GridContainer>
    )
}

export default TopTracksList
