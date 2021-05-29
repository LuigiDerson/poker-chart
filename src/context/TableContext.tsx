import React, { createContext, Dispatch, ReactNode, useReducer } from 'react'
import cards from '../helpers/cards'
import TableReducer, { Action } from './TableReducer'
import produce from 'immer'

/*
-pair: Hand pair
-actions: Possible actions 6 max.
--color: Action color
--chance: number between 1 to 100
*/

export type CellAction = { color: string; chance: number }
export type Pair = string

export interface Cell {
  pair: string
  actions: CellAction[]
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
export type UpdateCellsReducer = (pairs: Pair[], action: CellAction) => void

interface TableContextProps {
  children: ReactNode
}

const createTableState = (defaultTable: TableState) => {
  for (let r = 0; r < cards.length; r++) {
    for (let c = 0; c < cards.length; c++) {
      const pair = cards[r] + cards[c]
      const cell = { pair: pair, actions: [] }
      defaultTable.byId[pair] = cell
      defaultTable.allIds.push(pair)
    }
  }
  return defaultTable
}

export interface DefaultReducerState {
  table: TableState
  selectedPairs: Pair[]
}

interface DefaultContext extends DefaultReducerState {
  dispatch: Dispatch<Action>
}

const initialState: DefaultReducerState = {
  table: { byId: {}, allIds: [] },
  selectedPairs: [],
}

const defaultContext = {
  ...initialState,
  dispatch: () => {},
}

export const TableContext = createContext<DefaultContext>(defaultContext)

const init = (initialState: DefaultReducerState) => ({
  ...initialState,
  table: createTableState(initialState.table),
})

const curriedTableReducer = produce(TableReducer)

const TableContextProvider = ({ children }: TableContextProps) => {
  const [state, dispatch] = useReducer(curriedTableReducer, initialState, init)
  const { table, selectedPairs } = state

  return (
    <TableContext.Provider value={{ table, selectedPairs, dispatch }}>
      {children}
    </TableContext.Provider>
  )
}

export default TableContextProvider
