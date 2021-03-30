import React, { useContext, useState } from 'react'
import { TableContext } from '../../context/TableContext'

const TableCell = ({ pair = '', actions = [] }) => {
  const [selected, setSelected] = useState(false)
  const [state, setState] = useContext(TableContext)

  const selectCell = () => {
    setSelected(!selected)

    if (!selected) {
      setState({ ...state, selectedPair: pair })
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
            // const width = chance / actions.length
            return (
              <div
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

export default TableCell
