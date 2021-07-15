import React from 'react'
import { ReactComponent as Draggable } from './draggabledots.svg'

function ViewRow(props) {
  return (
    <div className="viewRow">
      <div>
        <Draggable width="25px" fill="#79859c" />
      </div>
      <div className="viewRow-leyend">{props.leyend}</div>
      <div className="viewRow-value">{props.value}</div>
    </div>
  )
}

export default ViewRow
