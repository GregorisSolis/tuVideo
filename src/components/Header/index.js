import React, { Component } from 'react'
import './header.css'

import photo_profile from '../../assets/photo_profile.png'

export default class Header extends Component{

  render(){
    return(
      <header>
      <div className="container-header">

        <div className="container-icon_menu_logo">
          <i className="icon-menu"></i>
          <div className="container-logo_tuvideo">
            <i className="icon-youtube"></i>
            <h3 className="logo_tuvideo">TuVideo</h3>
          </div>
        </div>

        <div className="container-input_search">
          <input type="text" placeholder="Search"/>
          <div className="container-icon_search">
            <i className="icon-search"></i>
          </div>
          <div className="container-icon_micro">
            <i className="icon-mic"></i>
          </div>
        </div>

        <div className="container-setting_apps">
          <i className="icon-video-camera"></i>
          <i className="icon-stack"></i>
          <i className="icon-bell"></i>
          <img className="user_img" src={photo_profile} alt="photo_profile"/>
        </div>

      </div>

      <div className="container-header_category">
        <div className="container-category">
          <p>Tudo</p>
        </div>
        <div className="container-category">
          <p>Tudo</p>
        </div>
        <div className="container-category">
          <p>Tudo</p>
        </div>
      </div>

      </header>
    )
  }
}