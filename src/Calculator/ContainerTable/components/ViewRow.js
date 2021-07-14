import React from 'react'

function ViewRow({ leyend, value }) {
  return (
    <div className="viewRow">
      <div className="viewRow-leyend">{leyend}</div>
      <div className="viewRow-value">{value}</div>
    </div>
  )
}

export default ViewRow
