import React from 'react'
import './App.scss'
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'

const App = () => {
  return (
    <div className='App-social-card'>
      <HeaderContainer />
      <CardContainer />
    </div>
  )
}

export default App
