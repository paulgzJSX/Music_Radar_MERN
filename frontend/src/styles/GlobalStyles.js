import styled, { css } from 'styled-components'

export const GridPage= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.7rem;
    color: #fff;
    
    @media (max-width: 1030px) {
        grid-template-columns: repeat(2, 1fr);    
    }

    @media (max-width: 620px) {
        grid-template-columns: 1fr;    
    }
`

export const flexCenterBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;    
`

export const flexCenterCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;    
`

export const flexCenterAround = css`
    display: flex;
    align-items: center;
    justify-content: space-around;    
`

export const flexCenterEnd = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;    
`

export const iconShared = css`
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    opacity: .7;
`