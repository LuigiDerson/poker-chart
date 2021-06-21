import React, { memo, useContext, useMemo } from 'react'

import Cell from './Cell'
import TableContext from '../../context/TableContext'
import { generateRowsFromState } from '../../context/state-helpers'

const Table = () => {
  const { cells } = useContext(TableContext)
  const rows = useMemo(() => generateRowsFromState(cells), [cells])

  return (
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
  )
}

export default memo(Table)
