import React from 'react'
import ViewTable from './components/ViewTable'

const round = (number) => Math.round((number + Number.EPSILON) * 100) / 100

function ContainerTable({ inputOne, inputTwo }) {
  const compute = (valOne, valTwo) => {
    const numberOne = Number(valOne)
    const numberTwo = Number(valTwo)
    return {
      Suma: round(numberOne + numberTwo),
      Resta: round(numberOne - numberTwo),
      Multiplicacion: round(numberOne * numberTwo),
      Division: numberTwo ? round(numberOne / numberTwo) : 'Indefinido',
      Potencia: round(Math.pow(numberOne, numberTwo)),
      'Raiz Cuadrada': `${round(Math.sqrt(numberOne))} | ${round(
        Math.sqrt(numberTwo)
      )}`,
      Hipotenusa: round(Math.hypot(numberOne, numberTwo))
    }
  }

  return <ViewTable {...compute(inputOne, inputTwo)} />
}

export default ContainerTable
