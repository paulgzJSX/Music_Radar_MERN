import styled, { keyframes } from 'styled-components'
import { flexCenterCenter } from './GlobalStyles'

export const fadeIn = keyframes`
    from { 
        transform: translateX(-30%);
        opacity: 0;
     }
    to { 
        transform: translateX(0);
        opacity: 1;
    }
`

export const LoginContainer = styled.div`
    background-color: #513252;
    height: 550px;
    width: 100%;
    padding: 3rem 3.5rem 2rem;
    animation: ${fadeIn} .8s;
    perspective: 2500px;
`

export const Card = styled(({ rotate, ...props }) => <div {...props} />)`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform .6s;
    transform-style: preserve-3d;
    transform: ${props => props.rotate && 'rotateY(180deg)'};
`

export const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`

export const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

export const Welcome = styled.div`
    ${flexCenterCenter};
    background-color: #fff;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    flex-direction: column;
    color: #513252;
    line-height: 1.3;
    margin: 0 auto;
    margin-bottom: 1.4rem;

    em {
        font-size: 1.2rem;
        font-weight: bold;
    }
`

export const WelcomeText = styled.h1`
    font-family: 'Amatic SC', cursive;
    font-size: 2rem;
`

export const MusicRadarText = styled.h1`
    font-size: 1.7rem;
    letter-spacing: -1.6px;
`

export const YourFavoritesFormContainer = styled.div`
    width: 100%;
    margin-bottom: .7rem;
`

export const FormContainer = styled.form`
    width: 100%;
    margin-bottom: .7rem;

    input {
        background-color: transparent;
        outline: none;
        border: 1px solid #fff;
        padding: 1.4rem;
        width: 100%;
        color: #fff;
        text-align: center;
        margin-bottom: .7rem;

        &::placeholder {
            color: #fff;
            font-family: inherit;
        }

        &:focus::placeholder {
            color: transparent;
        }
    }

    button {
        background-color: transparent;
        outline: none;
        border: 1px solid #fff;
        border-bottom: 7px solid #fff !important;
        padding: 1.3rem;
        color: #fff;
        width: 100%;
        font-family: inherit;
        cursor: pointer;
        font-size: 1rem;
        transition: all .2s ease-in;    

        &:hover {
            background-color: #7d457e;
        }
    }
`

export const PasswordControls = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Open Sans', sans-serif;
    font-size: .8rem;    
`

export const RememberPassword = styled.div`
    display: flex;
    align-items: center;  
    
    input {
        margin-right: .5rem;
        cursor: pointer;        
    }
`

export const SignUp = styled.a`
    color: #8c548f;
    transition: all .2s ease-in;
    cursor: pointer;

    &:hover {
        color: #c37cc7;
    }
`

export const Notification = styled.a`
    color: #8c548f;
    transition: all .2s ease-in-out;
    cursor: pointer;
    animation: ${fadeIn} .8s;
`

