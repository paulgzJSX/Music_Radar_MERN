import { useState, createContext } from 'react'

export const AudioContext = createContext()

const AudioContextProvider = (props) => {
    const [audio, setAudio] = useState()
    const [isPlaying, setIsPlaying] = useState(false)
    const [selectedTrack, setSelectedTrack] = useState()
    const [trackOfDayAudio, setTrackOfDayAudio] = useState()
    const [isTrackOfDayPlaying, setIsTrackOfDayPlaying] = useState(false)

    const clearAudioOnMount = () => {
        audio && audio.pause()
        setAudio(undefined)
        setIsPlaying(false)
        stopTrackOfDayAudio()
        setIsTrackOfDayPlaying(false)
    }

    const initiateAudio = (track) => {
        audio && audio.pause()
        audio && selectedTrack === track ? audio.play() : setAudio(new Audio(track.preview))
        setIsPlaying(true)
        setSelectedTrack(track)
    }

    const pauseAudio = () => {
        audio.pause()
        setIsPlaying(false)
    }

    const stopTrackOfDayAudio = () => {
        if (trackOfDayAudio) {
            trackOfDayAudio.pause()
            trackOfDayAudio.currentTime = 0
        }
    }

    return (
        <AudioContext.Provider value={{
            audio, setAudio,
            isPlaying, setIsPlaying,
            clearAudioOnMount,
            pauseAudio,
            initiateAudio,
            selectedTrack, setSelectedTrack,
            trackOfDayAudio, setTrackOfDayAudio,
            isTrackOfDayPlaying, setIsTrackOfDayPlaying,
            stopTrackOfDayAudio
        }}>
            {props.children}
        </AudioContext.Provider>
    )
}

export default AudioContextProvider