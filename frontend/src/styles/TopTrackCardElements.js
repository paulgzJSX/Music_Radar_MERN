import styled from 'styled-components'
import { BsPlus } from 'react-icons/bs'

export const TopTrackCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #000000;
    height: 549px;
`

export const CoverSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 420px;
    background-size: contain;
    border-bottom: 3px solid #fff;
    background: 
        linear-gradient(0deg, rgba(81, 50, 82, 0.7), rgba(81, 50, 82, 0.7)), 
        url(${props => props.backgroundImage}) center/cover no-repeat;
`

export const ArtistCard = styled.div`
    padding: 1rem;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`

export const PlusIcon = styled(BsPlus)`
    font-size: 1.5rem;
`

export const ArtistData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArtistImage = styled.img`
    object-fit: cover;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
`

export const ArtistName = styled.p`
`

export const TrackTitle = styled.span`
    font-size: .7rem;
    font-family: 'Open Sans', sans-serif;
`

export const Briefs = styled.div`
    padding: .8rem 1.5rem;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(81, 50, 82, 0.7), rgba(81, 50, 82, 0.7));

    p {
        font-size: .7rem;
        letter-spacing: 1px;
        opacity: .8;
    }
`

export const Stat= styled.div`
    /* width: 80px; */
`
