import React, { useState } from 'react'
import './caratulaVideo.css'
import InfoAlert from '../InfoAlert'
import PlayList from '../../components/PlayList'

import { useDispatch, useSelector } from 'react-redux'
import { addVideoAction } from '../../redux/playlist'
import { setDisplayFlex } from '../../redux/showList'

export default function CaratulaVideo(props){

    const [ textAlert, setTextAlert ] = useState('')
    const [ textAlertButton, setTextAlertButton ] = useState('')
    const [ showAlert, setShowAlert ] = useState(false)
    const dispatch = useDispatch()
    const list = useSelector(store => store.playlist.list)

    function addWatchLater(){
      setTextAlert('Saved to watch later');
      setTextAlertButton('UNDO');
      setShowAlert(true);
      setTimeout(function(){
        setShowAlert(false)
      },6000);
    }

    function addVideo(video){

      if(list.length === 0){
        let item = { id: 1, url: video.url_image_video, name: video.tittle_video}
        dispatch(addVideoAction(item))
      }else{
        let item = { id: list.length+1, url: video.url_image_video, name: video.tittle_video}
        dispatch(addVideoAction(item))
      }

      console.log(list)

    }

    return(
      <>
      {showAlert ? <InfoAlert textAlert={textAlert} textAlertButton={textAlertButton} /> : ""}

      <PlayList/>

      <div className="container-CaratulaVideo">
        <div className="image_caratulaVideo">
          <img src={props.url_image_video} alt="photo_video"/>
          <div className="container-durationTime">

            <div className="container-dualIcons" onClick={() => addWatchLater()}>
              <i className="icon-clock"></i>
            </div>
            <div className="container-dualIcons" onClick={() => addVideo(props)}>
              <i className="icon-list" onClick={() => dispatch(setDisplayFlex())}></i>
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
      </>
    )
}
