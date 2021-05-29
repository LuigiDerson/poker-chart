import { Dispatch, SetStateAction, useState } from 'react'
import ActionsForm from './ActionsForm'
import Table from './Table'

import useTable, { Pair, GenerateRowsFunction } from '../../hooks/useTable'
import cards from '../../helpers/cards'
import { chunkArray } from '../../helpers/utils'

const generateRowsFromState: GenerateRowsFunction = ({ byId, allIds }) =>
  chunkArray(
    allIds.map((pair) => byId[pair]),
    cards.length
  )

export type SelectPairFunction = Dispatch<SetStateAction<Pair[]>>

const SituationChart = () => {
  const { table, updateCells } = useTable()
  const [selectedPairs, setSelectedPairs] = useState<Pair[]>([])

  return (
    <div>
      {/* <ActionsForm selectedPair={selectedPair} updateCells={updateCells} /> */}

      {Boolean(selectedPairs.length) && <button>Edit Cells</button>}
      <Table
        rows={generateRowsFromState(table)}
        setSelectedPairs={setSelectedPairs}
      />
    </div>
  )
}

export default SituationChart
