import { memo, useContext, useState } from 'react'
import { loginUser, logoutUser } from '../../hooks/useLogin'
import { UserContext } from '../../context/UserContext'
import { FormContainer } from '../../styles/LoginElements'

const LoginForm = memo(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setUser, user, setDisplayBack, setIsRotating, setMessage } = useContext(UserContext)

    const handleSubmit = async e => {
        e.preventDefault()

        if (!user) {
            if (email && password) {
                try {
                    const { data }= await loginUser(email, password)
                        setUser(data._id)
                        setDisplayBack(true)
                        setIsRotating(true)
                } catch (err) { console.log(err.message) }
            }
        } else {
            try {
                const res = await logoutUser()
                res && setUser(undefined)
            } catch (err) { console.log(err) }
        }
    }

    return (
        <FormContainer>
            <input
                type="email"
                value={email}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)} />
            <input
                type="password"
                value={password}
                placeholder='*********'
                onChange={e => setPassword(e.target.value)} />
            <button
                type='submit'
                onClick={handleSubmit}
            >
                {user ? 'LOGOUT' : 'LOGIN'}
            </button>
        </FormContainer>
    )
})

export default LoginForm
