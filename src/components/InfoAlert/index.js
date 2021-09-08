import React from 'react'
import { Link } from 'react-router-dom'
import './infoAlert.css'

export default function InfoAlert(props){

  return(
    <div className="container-InfoAlert">
      <p>{props.textAlert}</p><Link to="#">{props.textAlertButton}</Link>
    </div>
  )
}
