import styled from 'styled-components'

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