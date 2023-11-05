import React, { useState } from 'react' 
import './account-header.css' 
import { RiSettings4Fill } from "react-icons/ri"; 
 
const AccountHeader = () => { 
 
  const [showPanel,setShowPanel] = useState(false) 
 
  return ( 
    <div className='account-header'> 
        <div className='account-info' onClick={() => setShowPanel(!showPanel)}> 
          <img 
            className='account-img'  
            src='https://w0.peakpx.com/wallpaper/201/144/HD-wallpaper-squid-game-squid-games-thumbnail.jpg' 
          /> 
          <div className='account-name'> 
            <p>Davit Manukyan</p> 
            <b>Admin</b> 
          </div> 
        </div> 
        {showPanel ?  
          (<div className='account-drop-panel'> 
            <button className='settings-btn'> 
              <RiSettings4Fill className='settings-icon'/> 
              Settings 
            </button> 
            <button className='signout-btn'>Sign out</button> 
          </div>) 
        : null} 
    </div> 
  ) 
} 
 
export default AccountHeader
