import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo, Navbar, Search } from '../../components'
import { UserContext } from '../../context/UserContext'
import { HeaderContainer, Mobile } from '../../styles/HeaderElements'

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const { user } = useContext(UserContext)

    const handleClick = () => {
        setIsMobileOpen(false)
    }

    return (
        <HeaderContainer>
            <Logo setIsMobileOpen={setIsMobileOpen} isMobileOpen={isMobileOpen} />
            <Navbar />
            <Search />
            <Mobile isMobileOpen={isMobileOpen} >
                <li onClick={handleClick}><NavLink to='/'>HOME</NavLink></li>
                {user && <li onClick={handleClick}><NavLink to='/favoriteAlbums'>FAVORITE TRACKS</NavLink></li>}
                <li onClick={handleClick}><NavLink to='/tracks'>TOP 10 TRACKS</NavLink></li>
                <li onClick={handleClick}><NavLink to='/albums'>TOP 10 ALBUMS</NavLink></li>
                <li onClick={handleClick}><NavLink to='/artists'>TOP ARTISTS</NavLink></li>
            </Mobile>
        </HeaderContainer>
    )
}

export default Header
