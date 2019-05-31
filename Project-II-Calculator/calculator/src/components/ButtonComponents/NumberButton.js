import React from 'react'
import './Button.scss'

const NumberButton = props => {
  return (
    <button className={`NumberButton ${props.btnColor}`}>{props.text}</button>
  )
}

export default NumberButton
