import cards from '../helpers/cards'
import { chunkArray, getHighestCard } from '../helpers/utils'

import { TableRows, NormalizedState, Cell } from './types'

export const generateRowsFromState = ({
  byId,
  allIds,
}: NormalizedState<Cell>): TableRows =>
  chunkArray(
    allIds.map((id) => byId[id]),
    cards.length
  )

export const normalizeModel = (cells: Cell[] = []) => {
  const normalized: NormalizedState<Cell> = { byId: {}, allIds: [] }
  if (cells.length < 1) {
    const fallbackState = createCellsState()
    return fallbackState
  }

  for (let index = 0; index < cells.length; index++) {
    const currentCell = cells[index]
    const id = String(currentCell.position.x) + String(currentCell.position.y)
    normalized.byId[id] = currentCell
    normalized.allIds.push(id)
  }

  return normalized
}

export const createCellsState = () => {
  const normalized: NormalizedState<Cell> = { byId: {}, allIds: [] }
  for (let row = 0; row < cards.length; row++) {
    for (let col = 0; col < cards.length; col++) {
      const x = String(row)
      const y = String(col)
      const id = x + y
      const pair = getHighestCard(cards[row], cards[col])
      const cell = { id, pair: pair, position: { x: col, y: row }, actions: [] }
      normalized.byId[id] = cell
      normalized.allIds.push(id)
    }
  }
  return normalized
}
