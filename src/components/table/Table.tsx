import React from 'react'
import PropTypes from 'prop-types'

import Cell from './Cell'
import { TableRows } from '../../hooks/useTable'
import { SelectPairFunction } from './TableEditor'

interface ChartProps {
  rows: TableRows
  setSelectedPairs: SelectPairFunction
}

const ChartTable = ({ rows = [], setSelectedPairs }: ChartProps) => {
  return (
    <div className="table">
      {rows.map((row, index) => (
        <div className="row" key={index}>
          {row.map(({ pair, actions }) => (
            <Cell
              pair={pair}
              actions={actions}
              key={pair}
              setSelectedPairs={setSelectedPairs}
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
