import React from 'react'
import './alertMessage.css'

import { useDispatch, useSelector } from 'react-redux'
import { setNotShow } from '../../redux/showAlert'
import { setDisplayNone } from '../../redux/showList'
import { clearList } from '../../redux/playlist'


export default function AlertMessage(props){

  const showAlert = useSelector(store => store.showAlert.alertValue)
  const dispatch = useDispatch()

  function closePlaylist() {
    dispatch(setNotShow())
    dispatch(setDisplayNone())
    dispatch(clearList())
  }

  return(
    <div className="container-background_alert" style={{display: showAlert }}>
      <div className="container-alertMessage">

        <div className="messageAlert">
          <h4>{props.tittleMSG}</h4>
          <p>{props.msg}</p>
        </div>

        <div className="btns_alertMessage">

          <button className="optionA" onClick={() => dispatch(setNotShow())}>
            <strong>{props.textAlertButtonOptionA}</strong>
          </button>

          <button className="optionB" onClick={() => closePlaylist()}>
              <strong>
                {props.textAlertButtonOptionB}
              </strong>
          </button>

        </div>
      </div>
    </div>
  )
}
