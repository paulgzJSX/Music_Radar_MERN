import { useEffect, useState, createContext } from 'react'
import { fetchUser } from '../hooks/useLogin'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState()
    const [favorites, setFavorites] = useState({})
    const [message, setMessage] = useState()
    const [displayBack, setDisplayBack] = useState(false)
    const [isRotating, setIsRotating] = useState(false)
    const [displayFront, setDisplayFront] = useState(true) 
    const [displayNotification, setDisplayNotification] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const userData = await fetchUser()
                setUser(userData._id)
                setFavorites({
                    ...favorites,
                    albums: new Set(userData.albums),
                    artists: new Set(userData.artists),
                    tracks: new Set(userData.tracks)
                })
            } catch (err) { console.log(err) }
        })()
    }, [user])

    return (
        <UserContext.Provider value={{
            user, setUser,
            favorites, setFavorites,
            displayBack, setDisplayBack,
            isRotating, setIsRotating,
            displayFront, setDisplayFront,
            message, setMessage,
            displayNotification, setDisplayNotification
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider