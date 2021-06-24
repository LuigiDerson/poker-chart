import { createContext } from 'react'
import { IState } from './TableProvider'
import { Cell, NormalizedState } from './types'

const TableContext = createContext<IState>({
  cellsList: [],
  cells: {} as NormalizedState<Cell>,
})

export default TableContext
