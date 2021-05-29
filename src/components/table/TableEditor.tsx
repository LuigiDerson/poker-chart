import { useContext } from 'react'
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
  const { table } = useContext(TableContext)

  return (
    <div>
      <ActionsForm />
      <Table rows={generateRowsFromState(table)} />
    </div>
  )
}

export default TableEditor
