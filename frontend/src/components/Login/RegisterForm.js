import { memo, useContext, useState } from 'react'
import { registerUser } from '../../hooks/useLogin'
import { UserContext } from '../../context/UserContext'
import { FormContainer } from '../../styles/LoginElements'

const RegisterForm = memo(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setMessage, setIsRotating, isRotating, setDisplayFront } = useContext(UserContext)

    const handleSubmit = async e => {
        e.preventDefault()

        if (email && password) {
            try {
                const res = await registerUser(email, password)
                setMessage(res.data)
                if (res.data === 'Success') {
                    setIsRotating(!isRotating)
                    setDisplayFront(true)
                }
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
                REGISTER
            </button>
        </FormContainer>
    )
})

export default RegisterForm
