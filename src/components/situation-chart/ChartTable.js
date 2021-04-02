import React from 'react'
import PropTypes from 'prop-types'

import TableCell from './TableCell'

const ChartTable = ({ rows = [], setSelectedPair }) => {
  return (
    <div className="table">
      {rows.map((row, index) => (
        <div className="row" key={row + index}>
          {row.map(({ pair, actions }) => (
            <TableCell
              pair={pair}
              actions={actions}
              key={pair}
              setSelectedPair={setSelectedPair}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

ChartTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        pair: PropTypes.string.isRequired,
        actions: PropTypes.array,
      })
    )
  ).isRequired,
  setSelectedPair: PropTypes.func,
}

export default ChartTable
