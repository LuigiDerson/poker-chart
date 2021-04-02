import React, { useState } from 'react'
import ActionsForm from './ActionsForm'
import ChartTable from './ChartTable'

import useTable from '../../hooks/useTable'

const chunkArray = (myArray, chunkSize) => {
  let index = 0
  var arrayLength = myArray.length
  const tempArray = []

  for (index = 0; index < arrayLength; index += chunkSize) {
    let myChunk = myArray.slice(index, index + chunkSize)
    // Do something if you want with the group
    tempArray.push(myChunk)
  }

  return tempArray
}

const generateRowsFromState = ({ byId, allIds }) =>
  chunkArray(
    allIds.map((pair) => byId[pair]),
    13 // set cards.length
  )

const SituationChart = () => {
  const { table, updateCell } = useTable()
  const [selectedPair, setSelectedPair] = useState('')

  return (
    <div>
      <ActionsForm selectedPair={selectedPair} updateCell={updateCell} />
      <ChartTable
        rows={generateRowsFromState(table)}
        setSelectedPair={setSelectedPair}
      />
    </div>
  )
}

export default SituationChart
