import { memo, useContext } from 'react'
import { LoginFront, LoginBack } from '../../components'
import { UserContext } from '../../context/UserContext'
import { Card, LoginContainer } from '../../styles/LoginElements'


const Login = memo(() => {
    const { displayBack, displayFront, isRotating } = useContext(UserContext)

    return (
        <LoginContainer>
            <Card rotate={isRotating}>
                {displayFront && <LoginFront />}
                {displayBack && <LoginBack />}
            </Card>
        </LoginContainer>
    )
})

export default Login



