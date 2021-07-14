import React from 'react'
import ViewRow from './ViewRow'

function ViewTable(props) {
  return (
    <div className="viewTable">
      {Object.keys(props).map((key, index) => (
        <ViewRow key={index} leyend={key} value={props[key]} />
      ))}
    </div>
  )
}

export default ViewTable
