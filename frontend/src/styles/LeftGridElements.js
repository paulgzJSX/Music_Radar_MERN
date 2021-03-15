import styled, { keyframes } from 'styled-components'
import { flexCenterBetween, flexCenterCenter } from './GlobalStyles'
import { BsStarFill } from 'react-icons/bs'

export const fadeIn = keyframes`
    from { 
        transform: translateX(-10%);
        opacity: 0;
     }
    to { 
        transform: translateX(0);
        opacity: 1;
    }
`

export const GridContainer = styled.div`
    background-color:  #000000;
    height: 700px;
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
`

export const GridItem = styled.div`
    ${flexCenterBetween};
    padding: .5rem 1.4rem;
    background-color: #513252;
    margin-bottom: .2rem;
    transition: all .3s ease;

    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        background-color: #7d457e;
    }
`

export const Position = styled.div`
    ${flexCenterCenter};
    width: 20px;

    h1 {
        font-size: 2.1rem;
        color: #402841;
    }
`

export const Image = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    cursor: pointer;

    @media (max-width: 1150px) {
        height: 40px;
        width: 40px;
    }

    @media (max-width: 1030px) {
        height: 50px;
        width: 50px;
    }

    @media (max-width: 840px) {
        height: 40px;
        width: 40px;
    }

    @media (max-width: 720px) {
        display: none;
    }

    @media (max-width: 620px) {
        display: block;
        height: 50px;
        width: 50px;
    }
`

export const Title = styled.div`
    width: 11rem;

    @media (max-width: 1260px) {
        width: 8rem;
    }

    @media (max-width: 1030px) {
        width: 11rem;
    }

    @media (max-width: 840px) {
        width: 8rem;
    }

    @media (max-width: 620px) {
        width: 13rem;
    }

    @media (max-width: 500px) {
        width: 11rem;
    }
`

export const ArtistName = styled.p`
    font-size: 1rem;

    @media (max-width: 1150px) {
        font-size: .8rem;
    }

    @media (max-width: 1030px) {
        font-size: 1rem;
    }

    @media (max-width: 840px) {
        font-size: .8rem;
    }

    @media (max-width: 620px) {
        font-size: 1rem;
    }
`

export const AlbumName = styled.p`
    font-size: .8rem;
    opacity: .7;
`

export const StarContainer = styled.div`
`

export const StarIcon = styled(BsStarFill)`
    cursor: pointer;
    font-size: 1.2rem;
    color: ${props => props.color};
`