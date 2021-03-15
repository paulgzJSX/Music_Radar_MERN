import { memo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useRelatedArtists } from '../../hooks/useSearch'
import { AudioContext } from '../../context/AudioContext'
import { RelatedArtists, RelatedArtist } from '../../styles/CardElements'
import { SearchContext } from '../../context/SearchContext'

const RelatedArtistsList = memo(({ artistId }) => {
    const { setSelectedArtistId } = useContext(SearchContext)
    const { clearAudioOnMount } = useContext(AudioContext)
    const { data: relatedArtists } = useRelatedArtists(artistId)

    let history = useHistory()

    const handleClick = e => {
        const { id } = relatedArtists.find(artist => artist.name === e.target.innerText)
        setSelectedArtistId(id)
        clearAudioOnMount()
        history.push('/search')
    }

    return (
        <RelatedArtists>
            {relatedArtists?.map(artist => (
                <RelatedArtist
                    key={artist.id}
                    onClick={handleClick}
                >
                    {artist.name}
                </RelatedArtist>
            ))}
        </RelatedArtists>
    )
})

export default RelatedArtistsList
