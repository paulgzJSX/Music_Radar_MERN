import styled from 'styled-components'
import image from '../images/street-light.jpg'
import { FaPlay, FaPause } from 'react-icons/fa'

export const PlayerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 110px;
    background: 
        linear-gradient(0deg, rgba(81, 50, 82, 0.5), rgba(81, 50, 82, 0.5)), 
        url(${image}) no-repeat center;
    background-size: cover;
    border-left: 3px solid #fff;
`

export const PlayerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    width: 65px;
    background-color: transparent;
    border: 3px solid #fff;
    border-radius: 50%;
    cursor: pointer;
`

export const Play = styled(FaPlay)`
    font-size: 1.5rem;
    transform: translateX(15%);
`

export const Pause = styled(FaPause)`
    font-size: 1.5rem;
`

export const TrackData = styled.div`
    width: 230px;
`

export const ArtistName = styled.p`
`

export const TrackTitle = styled.span`
    display: block;
    font-size: .8rem;
    opacity: .8;
    margin-bottom: .5rem;
`

export const WhiteLine = styled.div`
    height: 3px;
    width: 100%;
    background-color: #fff;
`

export const TrackTimer = styled.p`
`