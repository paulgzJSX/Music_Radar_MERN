import { memo, useRef, useContext } from 'react'
import Star from '../Generic/Star'
import { trimTitle, limitCharacters } from '../../helpers/helpers'
import { AudioContext } from '../../context/AudioContext'
import { TopAlbumsContext } from '../../context/TopAlbumsContext'
import { TopArtistsContext } from '../../context/TopArtistsContext'
import { SearchContext } from '../../context/SearchContext'
import { AlbumName, GridItem, Image, Title, ArtistName, Position } from '../../styles/LeftGridElements'

const Album = memo(({ album, position, context }) => {
    const starRef = useRef('')
    const gridItemRef = useRef('')
    const { setSelectedAlbum } = useContext(context)
    const { clearAudioOnMount } = useContext(AudioContext)

    const handleClick = e => {
        if (gridItemRef.current && !starRef.current.contains(e.target)) {
            setSelectedAlbum(album)
            clearAudioOnMount()
        }
    }

    return (
        <GridItem onClick={handleClick} ref={gridItemRef} >
            {context !== SearchContext &&
                <Position><h1>{position}</h1></Position>}
            <Image src={album.cover} alt={album.title} />
            <Title>
                <ArtistName>{album.artistName.toUpperCase()}</ArtistName>
                {context !== TopArtistsContext &&
                    <AlbumName>{limitCharacters(trimTitle(album.title), 30)} {context !== TopAlbumsContext && `(${new Date(album.releaseDate).getFullYear()})`}</AlbumName>
                }
            </Title>
            <Star 
                id={context === TopArtistsContext ? album.artistId : album.id} 
                type={context === TopArtistsContext ? 'artists' : 'albums'} 
                ref={starRef} 
                size='large' 
            />
        </GridItem>
    )
})

export default Album