import { memo, useContext } from 'react'
import SmallPlayer from '../Player/SmallPlayer'
import { getMinutes, trimTitle, limitCharacters } from '../../helpers/helpers'
import { AudioContext } from '../../context/AudioContext'
import { Track, TrackPosition, TrackData, TrackTitle, TrackDuration } from '../../styles/RightGridElements'

const TrackRow = memo(({ track, position }) => {
    const { isPlaying, selectedTrack } = useContext(AudioContext)

    return (
        <Track>
            <TrackPosition playing={track === selectedTrack && isPlaying}>
                <p>{position}</p>            
            </TrackPosition>
            <TrackData>
                <TrackTitle>{limitCharacters(trimTitle(track.title), 30)}</TrackTitle>
                <TrackDuration>{getMinutes(track.duration)}</TrackDuration>
            </TrackData>
            <SmallPlayer track={track} size={'25px'} margin={'0 0rem'} fontSize={'.6rem'} />
        </Track>
    )
})

export default TrackRow