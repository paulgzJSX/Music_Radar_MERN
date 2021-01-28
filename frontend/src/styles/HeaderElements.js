import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { GoSearch } from 'react-icons/go'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'

export const HeaderContainer = styled.header`
    top: 0;
    background-color: #513252;
    height: 105px;
    width: 83vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;   
    
    @media (max-width: 1300px) {
        width: 100%;
    } 
`

export const HamburgerIcon = styled(GiHamburgerMenu)`
    font-size: 2rem;
    color: #fff;
    display: none;
    cursor: pointer;

    @media (max-width: 1030px) {
        display: block;
    } 
`

export const Mobile = styled.div`
    display: none;

    @media screen and (max-width: 1030px) {
        display: grid;
        place-items: center;
        position: absolute;
        left: 0;
        height: 600px;
        width: 100%;
        background-color: #513252;
        z-index: 999;
        transition: all .6s ease;
        top: ${props =>  props.isMobileOpen ? '105px' : '-100%'};
        opacity: ${props =>  props.isMobileOpen ? '1' : '0'};
    } 
`

export const LogoContainer = styled(motion.div)`
    background-color: #fff;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;  

    @media (max-width: 1030px) {
        display: none;
    }  
`

export const LogoNavLink = styled(NavLink)`
    color: #513252;
    font-weight: 700;
`

export const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 600px;

    @media (max-width: 1030px) {
        display: none;
    }  
`

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-width: 200px;    

    @media (max-width: 1030px) {
        min-width: 0;
    } 
`

export const Input = styled.input`
    margin-right: .3rem;
    font-family: inherit;
    background-color: inherit;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    width: 75%;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 1.8px;    
`

export const IconContainer = styled.a`
    background-color: transparent;
    outline: none;
    border: none; 
`

export const CrossIcon = styled(ImCross)`
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    opacity: .6;
    margin-left: .3rem;   
`

export const SearchIcon = styled(GoSearch)`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;   
    opacity: .8;
    vertical-align: middle;   
`

export const DropdownContainer = styled.div`
    position: absolute;
    top: 28px;
    left: -30px;
    width: 226px;
    background-color: #513252;
    cursor: pointer;    
`

export const DropdownList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    display: block;
    width: 100% !important;
    color: #fff;
    padding: .5rem;
    z-index: 10;    
`