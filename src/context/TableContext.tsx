import { createContext } from 'react'
import { IState } from './TableProvider'

const TableContext = createContext<IState>({
  cellsList: [],
  cells: { byId: {}, allIds: [] },
})

export default TableContext
