import { memo, useContext, useEffect } from 'react'
import { AudioContext } from '../../context/AudioContext'
import { Player, Play, Pause } from '../../styles/PlayerElements'

const SmallPlayer = memo(({ track, currentTime = 0, duration = 30.0, size, margin, fontSize }) => {
    const { selectedTrack, initiateAudio, pauseAudio, audio, isPlaying, setIsPlaying } = useContext(AudioContext)

    useEffect(() => {
        audio && audio.play()
    }, [audio])

    useEffect(() => {
        currentTime === duration && setIsPlaying(false)
    }, [currentTime, duration])

    return (
        <Player size={size} margin={margin} >
            {isPlaying && selectedTrack === track && currentTime !== duration
                ? <Pause 
                    fontSize={fontSize} 
                    onClick={() => pauseAudio()} />
                : <Play
                    fontSize={fontSize} 
                    onClick={() => initiateAudio(track)}  />}
        </Player>
    )
})

export default SmallPlayer
