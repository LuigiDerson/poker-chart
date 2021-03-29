import React from 'react'

const TableCell = ({ pair = '', actions = [] }) => {
  const selectCell = (id) => {}
  return (
    <div className="square">
      <span style={{ position: 'absolute' }}>{pair}</span>
      {!!actions.length && (
        <div className="actions-container">
          {actions.map(({ color, chance }) => {
            // const width = chance / actions.length
            return (
              <div
                onClick={() => selectCell(pair)}
                style={{ width: `${chance}%`, backgroundColor: color }}
              ></div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default TableCell
