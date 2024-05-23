import { useState } from 'react'

import './App.css'
import Notification from './components/Notification'
import useNotification from './hooks/useNotification'

function App() {
 const {notificationComponent,triggerNotification,changePosition} =useNotification('top-right')

 const handleCLick=(event)=>{
  const position= event.target.value
   changePosition(position)
 }
   
  return (
    <>

   <div>

    <h2>React Toast</h2>
      
   <div>
    Select Position : &nbsp;&nbsp; 
    <select className='select-dropdown' onChange={handleCLick}>
      <option value='top-right'>Top-Right</option>
      <option value='bottom-left'>Bottom-Left</option>
      <option value='bottom-right'>Bottom-Right</option>
     
      <option value='top-left'>Top-Left</option>
    </select>
   </div>

   <br></br>

   

<div className='reactToast'>
      React Toast :  &nbsp;
      <button onClick={()=>{triggerNotification({
        type:'success',
        message:'File saved succesfully',
       
      })}}>Click here for Success toast</button> &nbsp;

       <button onClick={()=>{triggerNotification({
        type:'error',
        message:'Login Failed please try again',
        
      })}}>Click here for Error toast</button> &nbsp;

      <button onClick={()=>{triggerNotification({
        type:'warning',
        message:'Warning please dont refresh',
        duration:3000
      })}}>Click here for warning toast</button> &nbsp;

      <button onClick={()=>{triggerNotification({
        type:'info',
        message:'This is Info Toast',
        duration:3000
      })}}>Click here for Info toast</button> &nbsp;
       
    

      {notificationComponent}

     
    </div>
   </div>
    
    </>
  )
}

export default App
