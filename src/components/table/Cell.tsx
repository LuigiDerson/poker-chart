import React, { useContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Cell as CellProps, TableContext } from '../../context/TableContext'
import { TOGGLE_PAIRS } from '../../context/TableReducer'

const Cell = ({ pair = '', actions = [] }: CellProps) => {
  const [selected, setSelected] = useState(false)
  const { dispatch } = useContext(TableContext)

  const toggleCell = useCallback(() => {
    setSelected(!selected)
    dispatch({ type: TOGGLE_PAIRS, payload: { pairs: [pair] } })
  }, [pair, dispatch, selected])

  return (
    <div
      onClick={() => toggleCell()}
      className={`square ${selected ? 'square--selected' : ''}`.trim()}
    >
      <span style={{ position: 'absolute' }}>{pair}</span>
      {Boolean(actions.length) && (
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

Cell.propTypes = {
  pair: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      change: PropTypes.number,
    })
  ),
  setSelectedPair: PropTypes.func,
}

export default Cell
