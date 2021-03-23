import React from 'react'
import useTable from '../../hooks/useTable'

const ChartTable = () => {
  const rows = useTable()

  return (
    <div className="table">
      {rows.map((row) => (
        <div className="row">
          {row.map((cell) => (
            <div className="square">{cell.value}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ChartTable
