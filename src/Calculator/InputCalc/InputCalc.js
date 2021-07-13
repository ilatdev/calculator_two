import React from 'react'

export default function InputCalc({ id, currentValue, onChange, onClear }) {
  return (
    <div className="inputCalc">
      <input
        id={id}
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
