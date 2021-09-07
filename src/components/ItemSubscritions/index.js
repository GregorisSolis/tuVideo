import React from 'react'
import './itemSubscrition.css'

export default function ItemSubscritions(props){

  return(
    <div className="container-ItemSubscritions">
      <img src={props.url_photo_subscrition} alt="photo_profile_subscrition"/>
      <p>{props.nameSubscrition}</p>
    </div>
  )
}
