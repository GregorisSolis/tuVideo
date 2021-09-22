import React,{ useState, useEffect } from 'react'

export default function ButtonCategory(props){

  const [backgroundColor, setBackgroundColor] = useState('#4d4d4d')
  const [fontColor, setFontColor] = useState('')
  const [borderColor, setBorderColor] = useState('1px solid #373737')

    useEffect(() => {
      changeColor()
    })

  function changeColor(){
    let local = localStorage.getItem('page')
    if(fontColor === '' && local === props.tittle){
      setBackgroundColor('#fff');
      setFontColor('#000');
      setBorderColor('1px solid #fff');
    }
  }

  return(
    <div
      className="container-category"
      style={{background: backgroundColor, border: borderColor}}
    >
      <a style={{color: fontColor}} href={props.link}>{props.tittle}</a>
    </div>
  )
}
