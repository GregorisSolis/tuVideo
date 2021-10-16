import React,{useState} from 'react'
import './btnSubcribe.css'
import AlertMessage from '../AlertMessage'
import { useDispatch } from 'react-redux'
import { setShow } from '../../redux/showAlert'

export default function BtnSubcription(){

  const dispatch = useDispatch()

  const [ text, setText ] = useState('SUBSCRIBE')
  const [ textColor, setTextColor ] = useState('#fff')
  const [ background, setBackground ] = useState('red')

  function actionCor(){

    if(background === 'red'){
      setTextColor('#fff')
      setText("SUBSCRIBED")
      setBackground('#323232')
    }else if(background === '#323232'){
      dispatch(setShow())
      setTextColor('#fff')
      setText("SUBSCRIBE")
      setBackground('red')
    }

  }

  return(
    <div className="sucribe_btn">

      <AlertMessage tittleMSG="" msg="Unsubscribe?" textAlertButtonOptionA="CANCEL" textAlertButtonOptionB="UNSUBSCRIBE"/>

      <button onClick={() => actionCor()} style={{background: background, color: textColor}}>
        <strong>
          {text}
        </strong>
      </button>
    </div>
  )
}
