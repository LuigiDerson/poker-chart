import React from 'react'

const TableCell = ({ pair = '', actions = [] }) => {
  return (
    <div className="square">
      <span style={{ position: 'absolute' }}>{pair}</span>
      <div className="actions-container">
        {actions.map(({ color, chance }) => {
          // const width = chance / actions.length
          return (
            <div style={{ width: `${chance}%`, backgroundColor: color }}></div>
          )
        })}
      </div>
    </div>
  )
}

export default TableCell
