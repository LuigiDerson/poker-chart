import React, { useReducer, useMemo, ReactNode, useState } from 'react'
import produce from 'immer'

import TableContext from './TableContext'
import { Cell, CellAction, NormalizedState } from './types'
import TableReducer, {
  ADD_CELL_ACTION,
  REMOVE_CELL_ACTION,
} from './TableReducer'
import EditorContext from './EditorContext'
import { normalizeModel } from './state-helpers'

interface TableContextProps {
  children: ReactNode
}

export interface IState {
  cellsList?: Cell[] | []
  cells: NormalizedState<Cell>
  actions: CellAction[]
}

const initialState = {
  cellsList: [] as Cell[],
  cells: {} as NormalizedState<Cell>,
  actions: [],
}

const init = (initialState: IState) => ({
  ...initialState,
  cells: normalizeModel(initialState.cellsList),
})

const curriedTableReducer = produce(TableReducer)

const TableContextProvider = ({ children }: TableContextProps) => {
  const [{ cells, actions }, dispatch] = useReducer(
    curriedTableReducer,
    initialState,
    init
  )

  const [selectedCells, setSelectedCells] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const tableValue = useMemo(() => ({ cells, actions }), [cells, actions])

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

  const addCellAction = (action: CellAction) => {
    dispatch({
      type: ADD_CELL_ACTION,
      payload: { cells: selectedCells, action },
    })
  }

  const removeCellAction = (actionIndex: number) => {
    dispatch({
      type: REMOVE_CELL_ACTION,
      payload: { cells: selectedCells, actionIndex },
    })
  }

  const editorValue = useMemo(
    () => ({
      selectedCells,
      selectedColors,
      setSelectedCells,
      toggleSelectedCells,
      setSelectedColors,
      addCellAction,
      removeCellAction,
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
