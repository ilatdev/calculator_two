import React from 'react'

function ViewRow(props) {
  return (
    <div className="viewRow">
      <div className="viewRow-leyend">{props.leyend}</div>
      <div className="viewRow-value">{props.value}</div>
    </div>
  )
}

export default ViewRow
