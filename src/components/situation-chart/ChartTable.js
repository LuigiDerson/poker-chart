import React from 'react'
import useTable from '../../hooks/useTable'
import TableCell from './TableCell'

const ChartTable = () => {
  const { rows, updateCell } = useTable()

  return (
    <div className="table">
      {rows.map((row) => (
        <div className="row">
          {row.map(({ pair, actions }) => (
            <TableCell
              pair={pair}
              actions={actions}
              updateCell={updateCell}
              key={pair}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ChartTable
