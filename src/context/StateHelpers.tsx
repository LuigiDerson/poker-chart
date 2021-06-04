import cards from '../helpers/cards'
import { chunkArray } from '../helpers/utils'
import { GenerateRowsFunction } from './TableContext'

export const generateRowsFromState: GenerateRowsFunction = ({ byId, allIds }) =>
  chunkArray(
    allIds.map((id) => byId[id]),
    cards.length
  )
