import { memo, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { Notification } from '../../styles/LoginElements'


const NotificationMessage = memo(() => {
    const { displayNotification, message, setMessage, setDisplayNotification } = useContext(UserContext)

    useEffect(() => {
        setDisplayNotification(true)
        setTimeout(() => {
            setDisplayNotification(false)
            setMessage(undefined)
        }, 2000)
    }, [message])

    return (
        <>{displayNotification && <Notification>{message}</Notification>}
        
        </>
    )
})

export default NotificationMessage
