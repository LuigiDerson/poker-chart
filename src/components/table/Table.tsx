import React from 'react'
import PropTypes from 'prop-types'

import Cell from './Cell'
import { TableRows } from '../../context/TableContext'

type ChartProps = {
  rows: TableRows
}

const Table = ({ rows = [] }: ChartProps) => {
  return (
    <div className="table">
      {rows.map((row, index) => (
        <div className="row" key={index}>
          {row.map(({ pair, actions }) => (
            <Cell pair={pair} actions={actions} key={pair} />
          ))}
        </div>
      ))}
    </div>
  )
}

Table.propTypes = {
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

export default Table
