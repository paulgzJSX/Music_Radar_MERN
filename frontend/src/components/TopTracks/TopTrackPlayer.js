import { useContext, useEffect, useState } from 'react'
import { TracksContext } from '../../context/TracksContext'
import { AudioContext } from '../../context/AudioContext'
import { getTime } from '../../helpers/helpers'
import { ArtistName, Pause, Play, PlayerButton, PlayerContainer, TrackData, TrackTimer, TrackTitle, WhiteLine } from '../../styles/TopTrackPlayerElements'

const TopTrackPlayer = () => {
    const [currentTime, setCurrentTime] = useState(0.0)
    const [duration, setDuration] = useState(30.0)
    const { selectedTrack } = useContext(TracksContext)
    const { 
        initiateAudio, 
        pauseAudio, 
        isPlaying, 
        audio,
        setIsTrackOfDayPlaying, 
        stopTrackOfDayAudio  
    } = useContext(AudioContext)

    useEffect(() => {
        if (audio) {
            audio.play()
            audio.addEventListener('timeupdate', () => {
                setCurrentTime(audio.currentTime)
                setDuration(audio.duration)
            })
        }
        return () => audio && audio.removeEventListener('timeupdate', {})
    }, [audio])

    const handlePlay = () => {
        initiateAudio(selectedTrack)
        stopTrackOfDayAudio()
        setIsTrackOfDayPlaying(false) 
    }

    const handlePause = () => pauseAudio()

    return (
        <PlayerContainer>
            <PlayerButton>
                {isPlaying && currentTime !== duration
                    ? <Pause onClick={handlePause} />
                    : <Play onClick={handlePlay} />}
            </PlayerButton>
            {selectedTrack &&
                <TrackData>
                    <ArtistName>{selectedTrack.artist.name.toUpperCase()}</ArtistName>
                    <TrackTitle>{selectedTrack.title}</TrackTitle>
                    <WhiteLine />
                    <TrackTimer>{getTime(currentTime)} / {getTime(duration)}</TrackTimer>
                </TrackData>}
        </PlayerContainer>
    )
}

export default TopTrackPlayer
