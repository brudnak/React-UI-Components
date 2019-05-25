import React from 'react'
import './Header.scss'

const ImageThumbnail = () => {
  const lambdaLogo =
    'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
  return (
    <div className='ImageThumbnail'>
      <img src={lambdaLogo} alt={'Lambda School Logo'} />
    </div>
  )
}

export default ImageThumbnail
