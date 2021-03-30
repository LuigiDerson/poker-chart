import React from 'react'
import TableContextProvider from '../../context/TableContext'
import ActionsForm from './ActionsForm'
import ChartTable from './ChartTable'

const SituationChart = () => {
  return (
    <TableContextProvider>
      <div>
        <h1>Display table</h1>
        <ChartTable />
        <h1>Create table</h1>
        <ActionsForm />
        <ChartTable />
      </div>
    </TableContextProvider>
  )
}

export default SituationChart
