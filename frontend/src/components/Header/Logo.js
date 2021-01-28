import { HamburgerIcon, LogoContainer, LogoNavLink } from '../../styles/HeaderElements'

const Logo = ({ setIsMobileOpen, isMobileOpen }) => {
    return (
        <>
            <HamburgerIcon onClick={() => setIsMobileOpen(!isMobileOpen)} />
            <LogoContainer
                initial={{ opacity: 0 }}
                animate={{ rotate: 360, opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 2 }}
            >
                <LogoNavLink to='/'>MUSIC RADAR</LogoNavLink>
            </LogoContainer>
        </>
    )
}

export default Logo
