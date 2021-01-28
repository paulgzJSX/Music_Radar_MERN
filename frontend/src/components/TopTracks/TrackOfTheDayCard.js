import { useContext, useEffect, useState } from 'react'
import { Star, Timer, RelatedArtistsList } from '../../components'
import { trimNumber } from '../../helpers/helpers'
import { TracksContext } from '../../context/TracksContext'
import { AudioContext } from '../../context/AudioContext'
import { Pause, Play, PlayerButton } from '../../styles/TopTrackPlayerElements'
import { ArtistName, ArtistData, CoverSection, CurrentTrack, Header, ProfileSection, BlackLine, AlbumName, Rank, CardContainerAnimated } from '../../styles/CardElements'
import { CenterPlayer } from '../../styles/PlayerElements'

const TrackOfTheDayCard = () => {
    const [currentTime, setCurrentTime] = useState(0.00)
    const [duration, setDuration] = useState(29.9)
    const { trackOfDay } = useContext(TracksContext)
    const { clearAudioOnMount, trackOfDayAudio, setTrackOfDayAudio, isTrackOfDayPlaying, setIsTrackOfDayPlaying } = useContext(AudioContext)

    
    useEffect(() => {
        if (trackOfDayAudio) { 
            trackOfDayAudio.play()
            trackOfDayAudio.addEventListener('timeupdate', () => {
                setCurrentTime(trackOfDayAudio.currentTime)
                setDuration(trackOfDayAudio.duration)
            })
        }
        return () => {
            trackOfDayAudio && trackOfDayAudio.removeEventListener('timeupdate', {})
        }
    }, [trackOfDayAudio])


    const handlePlay = () => {
        clearAudioOnMount()
        setIsTrackOfDayPlaying(true)
        trackOfDay && setTrackOfDayAudio(new Audio(trackOfDay.preview))
    }

    const handlePause = () => {
        trackOfDayAudio.pause()
        setIsTrackOfDayPlaying(false)
        setDuration(trackOfDayAudio.currentTime)
    }


    return (
        <CardContainerAnimated animate={true}>
            <CoverSection backgroundImage={trackOfDay && trackOfDay.albumCover}>
                <Header>
                    <Star id={trackOfDay.id} type={'tracks'} />
                    <CurrentTrack>Track of the Day</CurrentTrack>
                </Header>
                {trackOfDay &&
                    <CenterPlayer>
                        <PlayerButton>
                            {isTrackOfDayPlaying && currentTime !== duration
                                ? <Pause onClick={handlePause} />
                                : <Play onClick={handlePlay} />}
                        </PlayerButton>
                    </CenterPlayer>
                }
                {duration && <Timer currentTime={currentTime} />}
            </CoverSection>

            {trackOfDay &&
                <ProfileSection>
                    <ArtistData>
                        <ArtistName>{trackOfDay.artistName.toUpperCase()} - {trackOfDay.title.toUpperCase()}</ArtistName>
                        <BlackLine />
                        <AlbumName>Album: {trackOfDay.album.toUpperCase()} ({new Date().getFullYear()})</AlbumName>
                    </ArtistData>
                    <RelatedArtistsList artistId={trackOfDay.artistId} />
                    <Rank>Rank: {trimNumber(trackOfDay.rank)}</Rank>
                </ProfileSection>}
        </CardContainerAnimated>
    )
}

export default TrackOfTheDayCard
