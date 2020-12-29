import React, { useState } from 'react'
import ChartTable from './ChartTable'

const SituationChart = () => {
  const [title, setTitle] = useState('Title')
  return (
    <div>
      <h1>{title}</h1>
      <ChartTable />
    </div>
  )
}

export default SituationChart
