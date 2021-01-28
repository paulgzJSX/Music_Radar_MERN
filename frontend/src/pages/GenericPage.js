import { useState, useEffect } from 'react'
import { Card, Loader, Albums, TracksList } from '../components'
import { useDataSetup } from '../hooks/useDataSetup'
import { GridPage } from '../styles/GlobalStyles'


const GenericPage = ({ context, albumsHook, albumsParam, tracksHook, tracksParam, artistId }) => {
    const [isLoading, setIsLoading] = useState(true)

    const {
        albums,
        albumTracks,
        albumsLoading,
        tracksLoading
    } = useDataSetup(context, albumsHook, albumsParam, tracksHook, tracksParam)

    useEffect(() => {
        if (albums && albumTracks && !albumsLoading && !tracksLoading) {
            setIsLoading(false)
        }
    }, [albums, albumTracks])

    return (
        <>
            {isLoading
                ? <Loader />
                : <GridPage>
                    <Albums albums={albums} context={context} />
                    <Card context={context} artistId={artistId} />
                    <TracksList albumTracks={albumTracks} />
                </GridPage>
            }
        </>
    )
}

export default GenericPage