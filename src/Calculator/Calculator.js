import React from 'react'
import InputCalc from './InputCalc'

const Calculator = () => {
  return (
    <>
      <div className="inputPanel">
        <h3>Calculadora Avanzada</h3>
        <div className="inputWrapper">
          <InputCalc />
          <InputCalc />
        </div>
      </div>
    </>
  )
}

export default Calculator
