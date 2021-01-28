import { useContext, useEffect } from 'react'
import { TopTrackDescriptionCard, TrackOfTheDayCard, Loader, Login } from '../components'
import { AudioContext } from '../context/AudioContext'
import { TracksContext } from '../context/TracksContext'
import { GridPage } from '../styles/GlobalStyles'


const Home = () => {
    const { clearAudioOnMount } = useContext(AudioContext)
    const { isLoading } = useContext(TracksContext)

    useEffect(() => clearAudioOnMount(), [])

    return (
        <>
            {isLoading
                ? <Loader />
                : <GridPage>
                    <Login />
                    <TopTrackDescriptionCard />
                    <TrackOfTheDayCard />
                </GridPage>
            }
        </>
    )
}


export default Home
