import styled, { keyframes } from 'styled-components'

export const fadeIn = keyframes`
    from { 
        transform: translateX(20%);
        opacity: 0;
     }
    to { 
        transform: translateX(0);
        opacity: 1;
    }
`

export const TracksContainer = styled.div`
    background-color:  #000000;
    max-height: 690px;
    animation: ${fadeIn} .8s;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: .1rem;
        background-color: #000;
    }

    &::-webkit-scrollbar-track {
        height: .5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: grey;
        outline: 1px solid #000;
    }

    @media (max-width: 1030px) {
        display: none;
    }
`

export const Track = styled.div`
    padding: .5rem 1.2rem;
    background-color: #513252;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .2rem;
    transition: all .2s ease;

    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        background-color: #7d457e;
    }
`

export const TrackPosition = styled.div`
    min-width: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.playing ? '#fff' : '#402841'};
`

export const TrackData = styled.div`
    min-width: 16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1260px) {
        width: 14rem;
    }

    @media (max-width: 1150px) {
        width: 12rem;
    }

`

export const TrackTitle = styled.p`

    @media (max-width: 1150px) {
        font-size: .8rem;
    }
`

export const TrackDuration = styled.p`
    font-size: .8rem;
    opacity: .7;

    @media (max-width: 1260px) {
        display: none;
    }
`