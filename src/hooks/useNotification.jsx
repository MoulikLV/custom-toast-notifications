import React, { useCallback, useState } from 'react'
import Notification from '../components/Notification'

const useNotification = (initialPosition='top-right') => {
    
    const [notification,setNotification]=useState(null)

    const [position,setPosition]=useState(initialPosition)
    
    let timer;
    const triggerNotification=useCallback((notificationProps)=>{
        clearTimeout(timer)
        setNotification(notificationProps)

        const defaultDuration = notificationProps.duration || 3000
        timer=setTimeout(() => {
            setNotification(null)
        }, defaultDuration);
    },[]);

    const changePosition=(newPosition)=>{
          setPosition(newPosition)
    }

    const notificationComponent= notification? (
        <div className={position}>
            <Notification {...notification}/>
        </div>

    ) : null;


    return {notificationComponent,triggerNotification,changePosition}

 
}

export default useNotification
