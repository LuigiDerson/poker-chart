import { Dispatch, SetStateAction, useState } from 'react'
import ActionsForm from './ActionsForm'
import ChartTable from './ChartTable'

import useTable, { Pair, GenerateRowsFunction } from '../../hooks/useTable'

const chunkArray = (myArray: any[], chunkSize: number) => {
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

const generateRowsFromState: GenerateRowsFunction = ({ byId, allIds }) =>
  chunkArray(
    allIds.map((pair) => byId[pair]),
    13 // set cards.length
  )

export type SelectPairFunction = Dispatch<SetStateAction<Pair>>

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
