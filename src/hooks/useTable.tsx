import { useState } from 'react'
import cards from '../helpers/cards'

/*
-pair: Hand pair
-actions: Possible actions 6 max.
--color: Action color
--chance: number between 1 to 100
*/

export type Action = { color: string; chance: number }
export type Pair = string

export interface Cell {
  pair: string
  actions: Action[]
}

export interface CellById {
  [key: string]: Cell
}

export interface TableState {
  byId: CellById
  allIds: Pair[]
}

export type Row = Cell[]
export type TableRows = Row[]
export type GenerateRowsFunction = (tableState: TableState) => TableRows
export type UpdateCellsFunction = (pairs: Pair[], action: Action) => void

const createDefaultState = () => {
  const state: TableState = { byId: {}, allIds: [] }

  for (let r = 0; r < cards.length; r++) {
    for (let c = 0; c < cards.length; c++) {
      const pair = cards[r] + cards[c]
      const cell = { pair: pair, actions: [] }
      state.byId[pair] = cell
      state.allIds.push(pair)
    }
  }
  return state
}

const defaultState = createDefaultState()

export default function useTable() {
  const [table, setTable] = useState(defaultState)

  const updateCells: UpdateCellsFunction = (pairs, action) => {
    pairs.forEach((pair) => {
      const currentPair = table.byId[pair]
      setTable({
        ...table,
        byId: {
          ...table.byId,
          [pair]: {
            ...currentPair,
            actions: [...currentPair.actions, action],
          },
        },
      })
    })
  }

  return { table, updateCells }
}
