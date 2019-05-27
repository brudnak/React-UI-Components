import React from 'react'
import './Card.scss'

const CardBanner = () => {
  const REACT_LOGO_PATH =
    'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'
  return (
    <div>
      <a className='CardBanner-anchor' href={'https://reactjs.org/'}>
        <img
          className='CardBanner-image'
          src={REACT_LOGO_PATH}
          alt={'JavaScript React logo'}
        />
      </a>
    </div>
  )
}

export default CardBanner
