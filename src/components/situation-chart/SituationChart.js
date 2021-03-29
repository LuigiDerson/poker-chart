import React from 'react'
import ActionsForm from './ActionsForm'
import ChartTable from './ChartTable'

const SituationChart = () => {
  return (
    <div>
      <h1>Display table</h1>
      <ChartTable />
      <h1>Create table</h1>
      <ActionsForm />
      <ChartTable />
    </div>
  )
}

export default SituationChart
