import React from 'react'
import PropTypes from 'prop-types'

import TableCell from './TableCell'
import { TableRows } from '../../hooks/useTable'
import { SelectPairFunction } from './SituationChart'

interface ChartProps {
  rows: TableRows
  setSelectedPair: SelectPairFunction
}

const ChartTable = ({ rows = [], setSelectedPair }: ChartProps) => {
  return (
    <div className="table">
      {rows.map((row, index) => (
        <div className="row" key={index}>
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
