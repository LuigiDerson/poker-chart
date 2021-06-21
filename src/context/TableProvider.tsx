import React, { useReducer, useMemo, ReactNode, useState } from 'react'
import produce from 'immer'

import TableContext from './TableContext'
import { Cell, NormalizedState } from './types'
import TableReducer from './TableReducer'
import EditorContext from './EditorContext'
import { normalizeModel } from './state-helpers'

interface TableContextProps {
  children: ReactNode
}

export interface IState {
  cellsList?: Cell[] | []
  cells: NormalizedState<Cell>
}

const initialState = {
  cellsList: [] as Cell[],
  cells: {} as NormalizedState<Cell>,
}

const init = (initialState: IState) => ({
  ...initialState,
  cells: normalizeModel(initialState.cellsList),
})

const curriedTableReducer = produce(TableReducer)

const TableContextProvider = ({ children }: TableContextProps) => {
  const [{ cells }, dispatch] = useReducer(
    curriedTableReducer,
    initialState,
    init
  )

  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const tableValue = useMemo(() => ({ cells }), [cells])

  const toggleSelectedCells = (cells: string[]) => {}

  const editorValue = useMemo(
    () => ({
      selectedCells,
      selectedColors,
      toggleSelectedCells,
      setSelectedColors,
    }),
    [selectedCells, selectedColors]
  )

  return (
    <TableContext.Provider value={tableValue}>
      <EditorContext.Provider value={editorValue}>
        {children}
      </EditorContext.Provider>
    </TableContext.Provider>
  )
}

export default TableContextProvider
