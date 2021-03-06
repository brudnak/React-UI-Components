import React from 'react'
import './Button.scss'

const ActionButton = props => {
  return (
    <button className={`ActionButton ${props.className}`}>{props.text}</button>
  )
}

export default ActionButton
