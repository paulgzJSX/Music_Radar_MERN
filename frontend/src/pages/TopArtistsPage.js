import { useContext } from 'react'
import { useTopArtists } from '../hooks/useArtists'
import { useTopArtistTracks } from '../hooks/useArtists'
import { TopArtistsContext } from '../context/TopArtistsContext'
import GenericPage from './GenericPage'


const TopArtistsPage = () => {
    const { selectedAlbum } = useContext(TopArtistsContext)

    return (
        <GenericPage
            context={TopArtistsContext}
            albumsHook={useTopArtists}
            albumsParam={null}
            tracksHook={useTopArtistTracks}
            tracksParam={selectedAlbum?.id}
            artistId={selectedAlbum?.artistId}
        />
    )
}

export default TopArtistsPage
