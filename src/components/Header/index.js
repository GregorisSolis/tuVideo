import React, { Component } from 'react'
import ButtonCategory from '../ButtonCategory'
import Sidebar from '../Sidebar'
import './header.css'

import photo_profile from '../../assets/photo_profile.png'
import AlertMessage from '../../components/AlertMessage'


export default class Header extends Component{

  render(){
    return(
      <header>

      <AlertMessage
        tittleMSG="Queue will be cleared"
        msg='Are you sure you want to close the player?'
        textAlertButtonOptionA="CANCEL"
        textAlertButtonOptionB="CLOSE PLAYER"
      />

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

      <div className="container-Sidebar_and_category">
        <Sidebar/>

        <div className="container-header_category">
          <ButtonCategory tittle="All" link="/" />
          <ButtonCategory tittle="Music" link="/music"/>
          <ButtonCategory tittle="Live"/>
          <ButtonCategory tittle="Pop"/>
          <ButtonCategory tittle="Rock"/>
          <ButtonCategory tittle="Lofi"/>
          <ButtonCategory tittle="Reggeton"/>
          <ButtonCategory tittle="Dembow"/>
          <ButtonCategory tittle="Merengue"/>
        </div>

      </div>


      </header>
    )
  }
}
