import React from 'react'

export default function InputCalc(props) {
  const { currentValue, onChange, onClear } = props
  return (
    <div className="inputCalc">
      <input
        className="inputCalc_field"
        type="text"
        onChange={onChange}
        value={currentValue}
      />

      <button
        className="inputCalc_clear"
        disabled={currentValue === '0'}
        onClick={onClear}>
        Clear
      </button>
    </div>
  )
}
