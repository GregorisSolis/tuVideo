import React from 'react'
import './navMobile.css'

export default function NavMobile(){
  return(
    <div className="container-NavMobile">
        <div className="container-icons_NavMobile">
            <a href="/">
              <i className="icon-home3"></i>
              <p>Home</p>
            </a>
        </div>
        <div className="container-icons_NavMobile">
            <i className="icon-compass2"></i>
            <p>Explorer</p>
        </div>
        <div className="container-icons_NavMobile">
            <i className="icon-stack"></i>
            <p>Subscriptions</p>
        </div>
        <div className="container-icons_NavMobile">
            <i className="icon-drawer"></i>
            <p>Library</p>
        </div>
    </div>
  )
}
