import React from 'react'
import {AiOutlineCheckCircle, AiOutlineCiCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfo, AiOutlineWarning} from 'react-icons/ai'
import './Notification.css'

const iconstyles= {marginRight:'10px'}
const icons={
    success: <AiOutlineCheckCircle style={iconstyles}/>,
    info: <AiOutlineInfo style={iconstyles}/>,
    warning: <AiOutlineWarning style={iconstyles}/>,
    error:<AiOutlineCloseCircle style={iconstyles}/>
}


const Notification = ({type="",message,setNotification}) => {

  const onClose=()=>{
       setNotification(null)
  }

  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      {<AiOutlineClose color='white' className='closeBtn' onClick={onClose}/>}
    </div>
  )
}

export default Notification
