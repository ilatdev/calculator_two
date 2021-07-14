import React from 'react'

export default function InputWithClear({
  id,
  currentValue,
  onChange,
  onClear
}) {
  const isCLear = currentValue === '0' ? 'clear_disabled' : ''
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
        className={`inputCalc_clear + ${isCLear}`}
        disabled={currentValue === '0'}
        onClick={onClear}>
        Clear
      </button>
    </div>
  )
}
