import React, { memo, useContext, useMemo } from 'react'

import Cell from './Cell'
import { TableContext } from '../../context/TableContext'
import { generateRowsFromState } from '../../context/StateHelpers'

const Table = () => {
  const { table } = useContext(TableContext)
  const rows = useMemo(() => generateRowsFromState(table), [table])

  return (
    <div className="table">
      {rows.map((row, index) => (
        <div className="row" key={index}>
          {row.map(({ pair, actions, id }) => (
            <Cell id={id} pair={pair} actions={actions} key={id} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default memo(Table)
