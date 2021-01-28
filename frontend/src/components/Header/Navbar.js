import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { NavLinks } from '../../styles/HeaderElements'

const Navbar = () => {
    const { user } = useContext(UserContext)

    return (
        <nav>
            <NavLinks>
                {user && <li><NavLink to='/favoriteAlbums'>FAVORITE TRACKS</NavLink></li>}
                <li><NavLink to='/tracks'>TOP 10 TRACKS</NavLink></li>
                <li><NavLink to='/albums'>TOP 10 ALBUMS</NavLink></li>
                <li><NavLink to='/artists'>TOP ARTISTS</NavLink></li>
            </NavLinks>

        </nav>
    )
}

export default Navbar
