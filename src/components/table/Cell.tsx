import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Cell } from '../../hooks/useTable'
import { SelectPairFunction } from './TableEditor'

interface TableCellProps extends Cell {
  setSelectedPairs: SelectPairFunction
}

const TableCell = ({
  pair = '',
  actions = [],
  setSelectedPairs,
}: TableCellProps) => {
  const [selected, setSelected] = useState(false)

  const selectCell = () => {
    setSelected(!selected)

    if (!selected) {
      setSelectedPairs((currState) => [...currState, pair])
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
