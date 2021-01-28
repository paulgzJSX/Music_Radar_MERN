import { memo, useContext } from 'react'
import NotificationMessage from './NotificationMessage'
import { logoutUser } from '../../hooks/useLogin'
import { UserContext } from '../../context/UserContext'
import { PasswordControls, SignUp } from '../../styles/LoginElements'


const PasswordRow = memo(({ text }) => {
    const { user, setUser, isRotating, displayBack, displayFront, setDisplayBack, setIsRotating, setDisplayFront } = useContext(UserContext)

    const handleClick = async () => {
        if (!user && displayFront) {
            setDisplayBack(true)
            setIsRotating(!isRotating)
        }

        if (!user && displayBack) {
            setDisplayFront(true)
            setIsRotating(!isRotating)
        }

        if (text === 'Logout') {
            try {
                const res = await logoutUser()
                if (res.data === 'Logged out') {
                    setIsRotating(!isRotating)
                    setDisplayFront(true)
                    setUser(undefined)
                }
            } catch (err) { console.log(err) }
        }
    }

    return (
        <PasswordControls>
            {/* <RememberPassword>
                <input type='checkbox' id='remember-password' />
                <label htmlFor="remember-password">Remember</label>
            </RememberPassword> */}
            {/* <NotificationMessage /> */}
            <SignUp onClick={handleClick}>{text}</SignUp>
        </PasswordControls>
    )
})

export default PasswordRow
