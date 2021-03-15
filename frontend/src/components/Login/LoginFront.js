import { memo } from 'react'
import { WelcomeCircle, PasswordRow, LoginForm } from '../../components'
import { Front } from '../../styles/LoginElements'


const LoginFront = memo(() => {
    return (
        <Front>
            <WelcomeCircle
                upperText='Welcome'
                middleText='to'
                lowerText='MUSIC RADAR'
            />
            <LoginForm />
            <PasswordRow text='Sign Up' />
        </Front>
    )
})

export default LoginFront
