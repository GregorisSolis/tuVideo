import React from 'react'
import './playlist.css'

import { useDispatch, useSelector } from 'react-redux'
import { setShow } from '../../redux/showAlert'

const PlayList = () => {

  const list = useSelector(store => store.playlist.list)
  const showList = useSelector(store => store.showList.displayValue)
  const dispatch = useDispatch()


return(
      <div className="container-playList" style={{display: showList}}>


        <div className="container-video_now">
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/1029550/capsule_616x353.jpg?t=1585074268" alt="image_video_now"/>
          <div className="container-icons_videos_now">

              <div className="icons_close_and_expand">
                <i className="icon-share"></i><h3 onClick={() => dispatch(setShow())}>X</h3>
              </div>

              <div className="icons_reproductor">
                <i className="icon-previous2"></i>
                <i className="icon-play3"></i>
                <i className="icon-next2"></i>
              </div>

              <div className="duration_video">
                <p>0:00 / 00:00</p>
              </div>

          </div>
        </div>

        <div className="container-name_video">
          <h4>los dirif mas malandrsos</h4>
        </div>

        <div className="list_video">
          <p>Queue 1/1{list}</p>
        </div>



      </div>
    )
}

export default PlayList
