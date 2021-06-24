import React, { useReducer, useMemo, ReactNode, useState } from 'react'
import produce from 'immer'

import TableContext from './TableContext'
import { Cell, CellAction, NormalizedState } from './types'
import TableReducer, { UPDATE_CELLS } from './TableReducer'
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

  const toggleSelectedCells = (ids: string[]) => {
    ids.forEach((id) => {
      const itemIndex = selectedCells.indexOf(id)
      if (itemIndex > -1) {
        const filteredCells = selectedCells.filter((currId) => id !== currId)
        setSelectedCells(filteredCells)
      } else {
        setSelectedCells((previousState) => [...previousState, id])
      }
    })
  }

  const updateSelectedCells = (payload: {
    cells: string[]
    action: CellAction
  }) => {
    dispatch({
      type: UPDATE_CELLS,
      payload,
    })
  }

  const editorValue = useMemo(
    () => ({
      selectedCells,
      selectedColors,
      setSelectedCells,
      toggleSelectedCells,
      setSelectedColors,
      updateSelectedCells,
    }),
    // eslint-disable-next-line
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
