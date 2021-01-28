import { memo } from 'react'
import TrackRow from './TrackRow'
import { TracksContainer } from '../../styles/RightGridElements'


const TracksList = memo(({ albumTracks }) => {
    return (
        <TracksContainer>
            {albumTracks && albumTracks.map((track, idx) =>
                <TrackRow
                    key={track.id}
                    track={track}
                    position={track.position ? track.position : idx + 1}
                />)}
        </TracksContainer>
    )
})

export default TracksList