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
            tracksParam={selectedAlbum && selectedAlbum.id}
            artistId={selectedAlbum && selectedAlbum.artistId}
        />
    )
}

export default TopArtistsPage
