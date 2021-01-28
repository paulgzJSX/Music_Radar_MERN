import { useContext, useEffect } from 'react'
import { TopTracksList, TopTrackDescriptionCard, TrackOfTheDayCard, Loader } from '../components'
import { AudioContext } from '../context/AudioContext'
import { TracksContext } from '../context/TracksContext'
import { GridPage } from '../styles/GlobalStyles'

const TopTracksPage = () => {
    const { clearAudioOnMount } = useContext(AudioContext)
    const { isLoading } = useContext(TracksContext)

    useEffect(() => clearAudioOnMount(), [])

    return (
        <>
            {isLoading
                ? <Loader />
                : <GridPage>
                    <TopTracksList />
                    <TopTrackDescriptionCard />
                    <TrackOfTheDayCard />
                </GridPage>
            }
        </>
    )
}

export default TopTracksPage
