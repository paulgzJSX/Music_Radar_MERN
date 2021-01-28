import styled, { keyframes } from 'styled-components'

export const slideIn = keyframes`
    from { 
        transform: translateX(30%);
        opacity: 0;
     }
    to { 
        transform: translateX(0);
        opacity: 1;
    }
`

export const opacityIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const CardContainer = styled.div`
    height: 549px;
    animation: ${opacityIn} .6s;
`

export const CardContainerAnimated = styled.div`
    height: 549px;
    animation: ${slideIn} .8s;
`

export const CoverSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    height: 328px;
    background: 
        linear-gradient(0deg, rgba(81, 50, 82, 0.7), rgba(81, 50, 82, 0.7)), 
        url(${props => props.backgroundImage}) no-repeat center/cover;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CurrentTrack = styled.p`
    opacity: .6;
`

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
    padding: 1.8rem 1.3rem 1rem;
    background-color: #fff;
    color: #000000;
`

export const ArtistData = styled.div`
`

export const ArtistName = styled.p`
    font-weight: bold;
`

export const BlackLine = styled.div`
    width: 180px;
    height: 1px;
    background-color: #000000;
    margin-bottom: .3rem;
`

export const AlbumName = styled.p`
    font-size: .8rem;
    font-weight: bold;
    opacity: .8;
`

export const Description = styled.p`
    font-size: .7rem;
    opacity: .7;
`

export const RelatedArtists = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const RelatedArtist = styled.li`
    font-size: .7rem;
    opacity: .7;
    margin-right: .3rem;
    padding: 0 .1rem;
    cursor: pointer;

    &:hover {
        background-color: #513252;
        color: #fff;
    }
`

export const Rank = styled.p`
    font-size: .7rem;
    opacity: .5;
`

