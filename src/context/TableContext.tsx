import React, {
  createContext,
  Dispatch,
  ReactNode,
  useMemo,
  useReducer,
} from 'react'
import cards from '../helpers/cards'
import TableReducer, { Action } from './TableReducer'
import produce from 'immer'
import { getHighestCard, uid } from '../helpers/utils'

export type CellAction = { color: string; chance: number }
export type Pair = string

export interface Cell {
  id: string
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
      const id = uid()
      const pair = getHighestCard(cards[r], cards[c])
      const cell = { id, pair: pair, actions: [] }
      defaultTable.byId[id] = cell
      defaultTable.allIds.push(id)
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

  const value = useMemo(
    () => ({ table, selectedPairs, dispatch }),
    [table, selectedPairs]
  )

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

export default TableContextProvider
