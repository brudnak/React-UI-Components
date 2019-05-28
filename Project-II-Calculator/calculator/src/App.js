import React from 'react'
import './App.scss'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ButtonContainer from './components/ButtonComponents/ButtonContainer'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div className='App-calculator'>
      <CalculatorDisplay />
      <ButtonContainer>
        <ActionButton text='clear' />
        <NumberButton text='÷' btnColor='NumberButton-operator' />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <NumberButton text='×' btnColor='NumberButton-operator' />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <NumberButton text='-' btnColor='NumberButton-operator' />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <NumberButton text='+' btnColor='NumberButton-operator' />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton text='0' />
        <NumberButton text='=' btnColor='NumberButton-operator' />
      </ButtonContainer>
    </div>
  )
}

export default App
