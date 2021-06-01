import { useContext, useState } from 'react'
import ActionsForm from './ActionsForm'
import Table from './Table'

import cards from '../../helpers/cards'
import { chunkArray } from '../../helpers/utils'
import { TableContext, GenerateRowsFunction } from '../../context/TableContext'

const generateRowsFromState: GenerateRowsFunction = ({ byId, allIds }) =>
  chunkArray(
    allIds.map((pair) => byId[pair]),
    cards.length
  )

const TableEditor = () => {
  const [editMode, setEditMode] = useState(false)
  const { table } = useContext(TableContext)

  return (
    <div>
      <button
        style={{ display: 'block' }}
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? 'Close Edition' : 'Edit Selection'}
      </button>
      <button style={{ display: 'block' }} onClick={() => 'save'}>
        Save
      </button>
      {editMode && <ActionsForm />}
      <Table rows={generateRowsFromState(table)} />
    </div>
  )
}

export default TableEditor
