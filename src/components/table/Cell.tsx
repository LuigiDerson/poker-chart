import React, { useContext, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Cell as CellProps, TableContext } from '../../context/TableContext'
import { SELECT_PAIRS } from '../../context/TableReducer'

const Cell = ({ pair = '', actions = [] }: CellProps) => {
  const [selected, setSelected] = useState(false)
  const { dispatch, selectedPairs } = useContext(TableContext)

  const selectCell = useCallback(() => {
    setSelected(!selected)

    if (!selected) {
      dispatch({ type: SELECT_PAIRS, payload: { pairs: [pair] } })
    }
  }, [pair, dispatch])

  useEffect(() => {
    if (selectedPairs.length < 1) {
      setSelected(false)
    }
  }, [selectedPairs])

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
