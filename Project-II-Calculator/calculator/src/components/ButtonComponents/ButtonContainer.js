import React from 'react'
import './Button.scss'

const ButtonContainer = props => {
  return (
    <div className={`ButtonContainer ${props.className}`}>{props.children}</div>
  )
}

export default ButtonContainer
