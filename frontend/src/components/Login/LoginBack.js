import { memo, useContext } from 'react'
import { WelcomeCircle, YourFavoritesForm, RegisterForm, PasswordRow } from '../../components'
import { UserContext } from '../../context/UserContext'
import { Back } from '../../styles/LoginElements'


const LoginBack = memo(() => {
    const { displayBack, user } = useContext(UserContext)

    return (
        <Back>
            {displayBack && !user &&
                <>
                    <WelcomeCircle upperText='Register' middleText='with' lowerText='MUSIC RADAR' />
                    <RegisterForm />
                    <PasswordRow text='Login' />
                </>}

            {displayBack && user &&
                <>
                    <WelcomeCircle upperText='Welcome' middleText='back to' lowerText='MUSIC RADAR' />
                    <YourFavoritesForm />
                    <PasswordRow text='Logout' />
                </>}
        </Back>
    )
})

export default LoginBack
