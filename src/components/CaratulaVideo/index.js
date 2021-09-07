import React from 'react'
import './caratulaVideo.css'

export default function CaratulaVideo(props){

    return(
      <div className="container-CaratulaVideo">
        <div className="image_caratulaVideo">
          <img src={props.url_image_video} alt="photo_video"/>
          <div className="container-durationTime">

            <div className="container-dualIcons">
              <i className="icon-clock"></i>
            </div>
            <div className="container-dualIcons">
              <i className="icon-list"></i>
            </div>

            <div className="background_durationTime">
            <p>00:00</p>
            </div>
          </div>
        </div>

        <div className="container-description_video">

              <div className="photo_user_profile">
                <img src={props.url_image_user} alt="photo_profile" />
              </div>

            <div className="container-tittles_video">

              <div className="tittle_video">
                <h3>{props.tittle_video}</h3>
              </div>

              <div className="subtittle_video">
                <div className="name_user_video">
                  <p>{props.name_user_video}</p>
                </div>
                <div className="container-views">
                  <p>{props.numberViews} Views</p>
                  <p><strong>.</strong></p>
                  <p>{props.publishedTime}</p>
                </div>
              </div>

            </div>

        </div>
      </div>
    )
}
