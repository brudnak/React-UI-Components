import React from 'react'
import './Header.scss'
import ImageThumbnail from './ImageThumbnail'
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {
  return (
    <div className='HeaderContainer'>
      <ImageThumbnail />
      <HeaderContent />
    </div>
  )
}

export default HeaderContainer
