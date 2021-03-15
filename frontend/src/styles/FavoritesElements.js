import styled from 'styled-components'
import { flexCenterBetween } from './GlobalStyles'
import { BsStarFill } from 'react-icons/bs'

export const StarContainer = styled.div`
`

export const StarIcon = styled(({ size, color, ...props }) => <BsStarFill {...props} />)`
    color: ${props => props.color};
    font-size: ${props => props.size === 'large' ? '1.2rem' : '1rem'} ;
    cursor: pointer;
    transition: all .5s ease;
`

export const FavoritesGridPage = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1.7rem;
    color: #fff;
`

export const FavoritesTracksContainer = styled.div`
`

export const FavoriteTrack = styled.div`
    ${flexCenterBetween};
    background-color: #513252;
    padding: .5rem 1.2rem;
    margin-bottom: .2rem;

    &:hover {
        background-color: #7d457e;
    }
`

export const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #fff;
`

export const TrackTitle = styled.p`
    width: 13rem;
    opacity: .8;
    font-size: .9rem;
`

export const AlbumTitle = styled.p`
    width: 11rem;
    opacity: .8;
    font-size: .9rem;
`

export const TrackDuration = styled.p`
    width: 1rem;
    font-size: .8rem;
    opacity: .8;
`

export const GainContainer = styled.div`
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Gain = styled.p`
    font-size: .8rem;
    opacity: .8;
`