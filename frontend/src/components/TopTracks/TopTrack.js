import { useRef, useContext } from 'react'
import Star from '../Generic/Star'
import { AudioContext } from '../../context/AudioContext'
import { TracksContext } from '../../context/TracksContext'
import { GridItem, Position, Image, Title, ArtistName, AlbumName } from '../../styles/LeftGridElements'


const TopTrack = ({ track }) => {
    const starRef = useRef('')
    const gridItemRef = useRef('')
    const { setSelectedTrack } = useContext(TracksContext)
    const { clearAudioOnMount } = useContext(AudioContext)

    const handleClick = e => {
        if (gridItemRef.current && !starRef.current.contains(e.target)) {
            setSelectedTrack(track)
            clearAudioOnMount()
        }
    }

    return (
        <GridItem onClick={handleClick} ref={gridItemRef} >
            <Position>
                <h1>{track.position}</h1>
            </Position>
            <Image src={track.album.cover_big} alt={track.title} />
            <Title>
                <ArtistName>{track.artist.name.toUpperCase()}</ArtistName>
                <AlbumName>{track.title}</AlbumName>
            </Title>
            <Star id={track.id} type={'tracks'} ref={starRef} size='large' />
        </GridItem>
    )
}

export default TopTrack
