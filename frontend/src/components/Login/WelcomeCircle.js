import { memo } from 'react'
import { Welcome, WelcomeText, MusicRadarText } from '../../styles/LoginElements'

const WelcomeCircle = memo(({ upperText, middleText, lowerText }) => {
    return (
        <Welcome>
            <WelcomeText>{upperText}</WelcomeText>
            <em>{middleText}</em>
            <MusicRadarText>{lowerText}</MusicRadarText>
        </Welcome>
    )
})

export default WelcomeCircle
