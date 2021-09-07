import React, { Component } from 'react'
import './Sidebar.css'

import ItemSubscritions from '../ItemSubscritions'

export default class Sidebar extends Component{

  render(){
    return(
      <div className="container-Sidebar">

        <div className="area_icons-a">

          <div className="container-icon_home">
            <i className="icon-home3"></i>
            <p>Home</p>
          </div>

          <div className="container-icon_compass">
            <i className="icon-compass2"></i>
            <p>Explorer</p>
          </div>

          <div className="container-icon_stack">
            <i className="icon-stack"></i>
            <p>Subscriptions</p>
          </div>

        </div>

        <div className="area_icons-b">

          <div className="container-icon_drawer">
            <i className="icon-drawer2"></i>
            <p>Library</p>
          </div>

          <div className="container-icon_clock">
            <i className="icon-history"></i>
            <p>History</p>
          </div>

          <div className="container-icon_yourVideos">
            <i className="icon-play3"></i>
            <p>Your videos</p>
          </div>

          <div className="container-watch_later">
            <i className="icon-clock"></i>
            <p>Watch Later</p>
          </div>

          <div className="container-liked_videos">
            <i className="icon-smile"></i>
            <p>Liked videos</p>
          </div>

        </div>

        <div className="area_icons-c">
          <h3>Subscriptions</h3>

          <div className="container-mySubscriptions">
            <ItemSubscritions nameSubscrition="Auron" url_photo_subscrition="https://img.freepik.com/vetores-gratis/ilustracao-de-impressora-de-tela-de-astronauta_13606-57.jpg?size=626&ext=jpg"/>
            <ItemSubscritions nameSubscrition="Auron" url_photo_subscrition="https://img.freepik.com/vetores-gratis/ilustracao-de-impressora-de-tela-de-astronauta_13606-57.jpg?size=626&ext=jpg"/>
          </div>
        </div>

        <div className="area_icons-d">
          <p><strong>more from tuvideo</strong></p>

          <div className="container-icon_movies">
            <i className="icon-display"></i>
            <p>Movies</p>
          </div>

          <div className="container-icon_live">
            <i className="icon-podcast"></i>
            <p>Live</p>
          </div>

          <div className="container-icon_sport">
            <i className="icon-trophy"></i>
            <p>Sport</p>
          </div>

          <div className="container-icon_gaming">
            <i className="icon-steam"></i>
            <p>Gaming</p>
          </div>

        </div>

        <div className="area_icons-e">

          <div className="container-icon_setting">
            <i className="icon-cog"></i>
            <p>Setting</p>
          </div>

          <div className="container-reportHistory">
            <i className="icon-flag"></i>
            <p>Report history</p>
          </div>

          <div className="container-help">
            <i className="icon-question"></i>
            <p>Help</p>
          </div>

        </div>

        <div className="area_about">
          <div className="lineA">
          <p>About</p><p>Press</p><p>Copyright</p>
          </div>
          <div className="lineaB">
          <p>Contact us</p><p>Creators</p><p>Advertise</p>
          </div>
          <p>developers</p>
          <p className="firm">@ Gregor developer</p>
        </div>

      </div>
    )
  }
}
