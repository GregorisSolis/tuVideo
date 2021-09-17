import React,{ useState } from 'react'

export default function ButtonCategory(props){

  const [backgroundColor, setBackgroundColor] = useState('transparent')
  const [fontColor, setFontColor] = useState('')
  const [borderColor, setBorderColor] = useState('1px solid #373737')

  function changeColor(){

    if(fontColor === ''){
      setBackgroundColor('#fff');
      setFontColor('#000');
      setBorderColor('1px solid #fff');
    }

  }

  return(
    <div
      className="container-category"
      style={{background: backgroundColor, color: fontColor, border: borderColor}}
      onClick={() => changeColor()}
    >
      <p>{props.tittle}</p>
    </div>
  )
}
