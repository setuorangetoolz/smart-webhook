import React from 'react'
import { CircleAddIcon, CloseIcon } from './icons'

const SmartHooks = () => {
  return (
    <div>
        <div className='smart-hooks-content-wrp'>
           <div className='sh-drawer-header'>
            <p className='font-medium'>Smart webhooks</p>
            <span className='sh-close-icon'><CloseIcon/></span>
            </div> 
            <div className='sh-drawer-footer'>
            <p className='font-secondary'>Close</p>
            <button className='font-secondary'><span ><CircleAddIcon/></span>Dynamic Followup</button>
            
            </div> 
        </div>
    </div>
  )
}

export default SmartHooks