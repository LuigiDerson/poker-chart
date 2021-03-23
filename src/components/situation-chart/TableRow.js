import React from 'react'
import TableHead from './TableHead'
import TableData from './TableData'

const TableRow = ({ head, data }) => {
  return (
    <tr className="row">
      <TableHead head={head} />
      {data.map((card) => (
        <TableData key={head + card} data={head + card} />
      ))}
    </tr>
  )
}

export default TableRow
