import React,{ useState, useEffect } from 'react'
import './playlist.css'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setShow } from '../../redux/showAlert'
import { plusVideo } from '../../redux/playlist'

const PlayList = () => {

  useEffect(() => verifyList())

  const list = useSelector(store => store.playlist.list)
  const watchNow = useSelector(store => store.playlist.watchNow)
  const showList = useSelector(store => store.showList.displayValue)
  const dispatch = useDispatch()

  let itemNow = list[watchNow] || []

  const [bottomValue, setBottonValue] = useState('-30%')
  const [handleButton, setHandleButton] = useState(true)

  function changeButton(){

    if(handleButton === true){
      setHandleButton(false)
      setBottonValue('0')
    }else{
      setHandleButton(true)
      setBottonValue('-30%')
    }
  }

  function verifyList(){
    if(itemNow.length === 0){
      setHandleButton(true)
      setBottonValue('-30%')
    }
  }

return(
      <div className="container-playList" style={{display: showList, bottom: bottomValue}}>


        <div className="container-video_now">
          <img src={itemNow.url} alt="image_video_now"/>
          <div className="container-icons_videos_now">

              <div className="icons_close_and_expand">
                <i className="icon-share"></i><i className="icon-close" onClick={() => dispatch(setShow())}>X</i>
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
          <h4>{itemNow.name}</h4>
        </div>

        <div className="list_video">
          <p>Queue 1/{list.length}</p>
            {handleButton ?
              <i className="icon-circle-up" onClick={() => changeButton()}></i>:
              <i className="icon-circle-down" onClick={() => changeButton()}></i>
            }
        </div>

        <div className="container-items_videos">
          <div className="add_new_playlist"><i className="icon-menu"></i><h4>SAVE</h4></div>
          {list.map((item) => (
              <Link
                to="#"
                className="item_video"
                key={item.id}
                onClick={() => dispatch(plusVideo(item.id))}
              >
                  <i className="icon-play3"></i>
                  <img src={item.url} alt={item.name}/>
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.user}</p>
                </div>
              </Link >
          ))}
        </div>

      </div>
    )
}

export default PlayList
