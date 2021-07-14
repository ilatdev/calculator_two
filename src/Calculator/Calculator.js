import React, { useEffect, useState } from 'react'
import InputWithClear from './InputWithClear'
import ContainerTable from './ContainerTable'

const validation = /^(\d*)$|^(\d*\.\d*)$/

const isValid = (string) => {
  return validation.test(string)
}

const Calculator = () => {
  const [inputOne, setInputOne] = useState('0')
  const [inputTwo, setInputTwo] = useState('0')
  const [error, setError] = useState(null)

  useEffect(() => {
    const clickInputOne = (event) => {
      if (event.target.value === '0') return setInputOne('')
    }

    const clickInputTwo = (event) => {
      if (event.target.value === '0') return setInputTwo('')
    }

    const inputOne = document.getElementById('inputOne')
    const inputTwo = document.getElementById('inputTwo')

    inputOne.addEventListener('click', clickInputOne)
    inputTwo.addEventListener('click', clickInputTwo)
    return () => {
      inputOne.removeEventListener('click', clickInputOne)
      inputTwo.removeEventListener('click', clickInputTwo)
    }
  }, [])

  const handleInputChange = (event, setState) => {
    setError(null)
    let input = event.target.value
    if (isValid(input)) return setState(input)
    return setError('Solo se admiten numeros enteros o decimales')
  }

  const handleClear = (handler) => {
    setError(null)
    return handler('0')
  }

  return (
    <>
      <div className="inputPanel">
        <h3>Calculadora Avanzada</h3>
        <div className="inputWrapper">
          <InputWithClear
            id="inputOne"
            currentValue={inputOne}
            onChange={(e) => handleInputChange(e, setInputOne)}
            onClear={() => handleClear(setInputOne)}
          />
          <InputWithClear
            id="inputTwo"
            currentValue={inputTwo}
            onChange={(e) => handleInputChange(e, setInputTwo)}
            onClear={() => handleClear(setInputTwo)}
          />
        </div>
        <div className="error-wrapper">{!!error && <p>{error}</p>}</div>
      </div>
      <ContainerTable inputOne={inputOne} inputTwo={inputTwo} />
    </>
  )
}

export default Calculator
