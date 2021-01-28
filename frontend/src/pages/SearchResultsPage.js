import { useContext } from 'react'
import { useSearchAlbums } from '../hooks/useSearch'
import { useSearchAlbumTracks } from '../hooks/useSearch'
import { SearchContext } from '../context/SearchContext'
import GenericPage from './GenericPage'


const SearchResultsPage = () => {
    const { selectedAlbum, selectedArtistId } = useContext(SearchContext)

    return (
        <GenericPage
            context={SearchContext}
            albumsHook={useSearchAlbums}
            albumsParam={selectedArtistId}
            tracksHook={useSearchAlbumTracks}
            tracksParam={selectedAlbum && selectedAlbum.tracklist}
            artistId={selectedArtistId}
        />
    )
}

export default SearchResultsPage
