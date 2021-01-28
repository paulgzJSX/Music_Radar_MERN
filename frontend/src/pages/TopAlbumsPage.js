import { useContext } from 'react'
import { useTopAlbums } from '../hooks/useTopAlbums'
import { useTopAlbumTracks } from '../hooks/useTopAlbums'
import { TopAlbumsContext } from '../context/TopAlbumsContext'
import GenericPage from './GenericPage'


const TopAlbumsPage = () => {
    const { selectedAlbum } = useContext(TopAlbumsContext)

    return (
        <GenericPage
            context={TopAlbumsContext}
            albumsHook={useTopAlbums}
            albumsParam={null}
            tracksHook={useTopAlbumTracks}
            tracksParam={selectedAlbum && selectedAlbum.id}
            artistId={selectedAlbum && selectedAlbum.artistId}
        />
    )
}

export default TopAlbumsPage
