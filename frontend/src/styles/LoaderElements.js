import styled, { keyframes } from 'styled-components'

export const spin = keyframes`
    from {
		transform: rotate(360deg);
	}
`

export const LoaderContainer = styled.div`
	width: 1em;
	height: 1em;
	font-size: 146px;
	position: relative;
    display:block;    
    
    &:after, &:before {
        content: "";
        top: 0;
        display: block;
        width: 1em;
        height: 1em;
        position: absolute;
        border-width: 0.5em;
        border-style: double;
        border-color: transparent;
        border-radius: 1em;
        box-sizing: border-box;
        animation: ${spin} 1.15s infinite;
    }

    &:after {
    	left: 0;
	    border-left-color: #fff;    
    }

    &:before {
        right: 0;
        border-right-color:#fff;
        animation-delay: -0.29s;
    }
`


