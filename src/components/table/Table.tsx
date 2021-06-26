import React, { memo, useContext, useMemo } from 'react'

import Cell from './Cell'
import TableContext from '../../context/TableContext'
import { generateRowsFromState } from '../../context/state-helpers'

const Table = () => {
  const { cells, actions } = useContext(TableContext)
  const rows = useMemo(() => generateRowsFromState(cells), [cells])

  return (
    <>
      <div className="table">
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map(({ pair, actions, id, position }) => (
              <Cell
                id={id}
                pair={pair}
                actions={actions}
                key={id}
                position={position}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        {actions.map(({ legend, color }) => (
          <span
            key={color}
            style={{ backgroundColor: color, display: 'inline-block' }}
          >
            {legend}
          </span>
        ))}
      </div>
    </>
  )
}

export default memo(Table)
