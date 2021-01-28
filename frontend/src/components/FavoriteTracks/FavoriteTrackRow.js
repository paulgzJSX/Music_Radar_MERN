import { memo, useContext } from 'react'
import { SmallPlayer, Star } from '..'
import { getMinutes, trimTitle } from '../../helpers/helpers'
import { AudioContext } from '../../context/AudioContext'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { TrackPosition } from '../../styles/RightGridElements'
import { Gain, FavoriteTrack, Image, TrackDuration, TrackTitle, AlbumTitle, GainContainer } from '../../styles/FavoritesElements'


const FavoriteTrackRow = memo(({ track, position }) => {
    const { isPlaying, selectedTrack } = useContext(AudioContext)

    return (
        <FavoriteTrack backgroundImage={track.artistPicture}>
            <TrackPosition playing={track === selectedTrack && isPlaying}>
                <p>{position}</p>
            </TrackPosition>
            <Image src={track.artistPicture} />
            <TrackTitle>{track.artistName.toUpperCase()} - {trimTitle(track.title)}</TrackTitle>
            <AlbumTitle>{trimTitle(track.albumTitle)} ({new Date(track.albumReleaseDate).getFullYear()})</AlbumTitle>
            <GainContainer>
                <Gain>{track.gain}</Gain>
                {track.gain < 0 ? <BsArrowDown /> : <BsArrowUp />}
            </GainContainer>
            <TrackDuration>{getMinutes(track.duration)}</TrackDuration>
            <SmallPlayer track={track} size={'25px'} margin={'0 0rem'} fontSize={'.6rem'} />
            <Star id={track.id} type={'tracks'} />
        </FavoriteTrack>
    )
})

export default FavoriteTrackRow