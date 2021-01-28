import styled from 'styled-components'
import { FaPlay, FaPause, FaForward, FaBackward, FaStepBackward, FaStepForward } from 'react-icons/fa'


export const Player = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    opacity: .7;
    height: ${props => props.size};
    width: ${props => props.size};
    margin: ${props => props.margin};
`

export const Play = styled(FaPlay)`
    transform: translateX(2px);
    font-size: ${props => props.fontSize};
`

export const Pause = styled(FaPause)`
     font-size: ${props => props.fontSize};
`

export const CenterPlayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
`

export const FirstTrackIcon = styled(FaStepBackward)`
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    opacity: .7;
`

export const BackIcon = styled(FaBackward)`
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    opacity: .7;
`

export const ForwardIcon = styled(FaForward)`
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    opacity: .7;
`

export const LastTrackIcon = styled(FaStepForward)`
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    opacity: .7;
`

export const TimerContainer = styled.div`
`

export const PlayerLine = styled.div`
    height: 3px;
    width: 100%;
    background-color: #fff;    
`

export const CurrentTime = styled.h2`
    margin-bottom: .5rem;
`