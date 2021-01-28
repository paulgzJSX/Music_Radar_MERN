import { memo, useState, useContext, useEffect } from 'react'
import { SmallPlayer, Timer } from '../../components'
import { AudioContext } from '../../context/AudioContext'
import { BackIcon, CenterPlayer, ForwardIcon, FirstTrackIcon, LastTrackIcon } from '../../styles/PlayerElements'

const BigPlayer = memo(({ track, context }) => {
    const [lastTrack, setLastTrack] = useState(false)
    const [firstTrack, setFirstTrack] = useState(false)
    const [currentTime, setCurrentTime] = useState(0.0)
    const [duration, setDuration] = useState(30.0)

    const { initiateAudio, audio } = useContext(AudioContext)
    const { albumTracks } = useContext(context)

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

    const moveToNextTrack = (idx, next) => {
        initiateAudio(albumTracks[idx + next])
        setFirstTrack(false)
        setLastTrack(false)
    }

    const handlePrevTrack = () => {
        albumTracks.forEach((albumTrack, idx) => {
            if (track === albumTrack) {
                idx === 0 ? setFirstTrack(true) : moveToNextTrack(idx, -1)
            }
        })
    }

    const handleNextTrack = () => {
        albumTracks.forEach((albumTrack, idx) => {
            if (track === albumTrack) {
                idx === albumTracks.length - 1 ? setLastTrack(true) : moveToNextTrack(idx, 1)
            }
        })
    }

    return (
        <>
            <CenterPlayer>
                {firstTrack
                    ? <FirstTrackIcon />
                    : <BackIcon onClick={handlePrevTrack} />}
                {track && <SmallPlayer track={track} currentTime={currentTime} duration={duration} size={'65px'} margin={'0 .3rem'} fontSize={'1.6rem'} />}
                {lastTrack
                    ? <LastTrackIcon />
                    : <ForwardIcon onClick={handleNextTrack} />}
            </CenterPlayer>
            {duration && <Timer currentTime={currentTime} />}
        </>
    )
})

export default BigPlayer
