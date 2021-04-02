import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ pair = '', actions = [], setSelectedPair }) => {
  const [selected, setSelected] = useState(false)

  const selectCell = () => {
    setSelected(!selected)

    if (!selected) {
      setSelectedPair(pair)
    }
  }

  return (
    <div
      onClick={() => selectCell()}
      className={`square ${selected ? 'square--selected' : ''}`.trim()}
    >
      <span style={{ position: 'absolute' }}>{pair}</span>
      {!!actions.length && (
        <div className="actions-container">
          {actions.map(({ color, chance }) => {
            return (
              <div
                key={color} // TODO: change this
                style={{
                  width: `${chance}%`,
                  backgroundColor: color,
                }}
              ></div>
            )
          })}
        </div>
      )}
    </div>
  )
}

TableCell.propTypes = {
  pair: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      change: PropTypes.number,
    })
  ),
  setSelectedPair: PropTypes.func,
}

export default TableCell
