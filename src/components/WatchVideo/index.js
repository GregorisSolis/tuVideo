import React from 'react';
import ItemSubscritions from '../ItemSubscritions'
import BtnSubcription from '../BtnSubcription'
import photo_profile from '../../assets/photo_profile.png'


const WatchVideo = () => {

  let itemNow = JSON.parse(localStorage.getItem('videoOne'))

  return(
    <div className="container_reproductor">
      <div className="container_watch-img">
        <img src={itemNow.url_image_video} alt={itemNow.tittle_video}/>


        <div className="line-time"></div>
        <div className="container_watch-btns">
          <div className="content_A">
            <i className="icon-play3"></i>
            <i className="icon-next2"></i>
            <i className="icon-volume-medium"></i>
            <p>00:00/00:00</p>
          </div>
          <div className="content_B">
            <i className="icon-cog"></i>
            <i className="icon-teatro"></i>
            <i className="icon-enlarge"></i>
          </div>
        </div>

      </div>

      <div className="container_video-panel">
        <div className="WatchVideo_tittle-video">
            <h2>{itemNow.tittle_video}</h2>
        </div>
        <div className="WatchVideo-views-likes">
            <p className="tittle-views">1.000.000 views - {itemNow.publishedTime}</p>
            <div className="btns_likes">
              <div className="line_botton">
                <i className="icon-smile2"></i><p>9</p>
              </div>
              <div className="line_botton">
                <i className="icon-sad2"></i><p>1</p>
              </div>
              <i className="icon-share"></i><p>SHARE</p>
              <i className="icon-drawer"></i><p>SAVE</p>
            </div>
        </div>
        <div className="video_description">
          <div className="btn_subcription-img_user">
            <ItemSubscritions url_photo_subscrition={itemNow.url_image_user} nameSubscrition={itemNow.name_user_video}/>
            <BtnSubcription/>
          </div>
          <p className="text_description">thank you very much for your love</p>
        </div>
        <div className="container_comments">
            <div className="number_comments"><h4>0 Comments</h4><h4>SORT BY</h4></div>
            <div className="add_comment">
              <img src={photo_profile} alt="img_profile" />
              <input placeholder="Add a public comment..." />
            </div>
        </div>
      </div>
    </div>
  )
}

export default WatchVideo;
