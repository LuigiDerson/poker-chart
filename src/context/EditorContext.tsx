import { createContext } from 'react'
import { CellAction } from './types'

interface IEditorContext {
  selectedCells: string[]
  selectedColors: string[]
  toggleSelectedCells: (ids: string[]) => void
  setSelectedColors: (color: string[]) => void
  setSelectedCells: (cells: string[] | []) => void
  addCellAction: (action: CellAction) => void
  removeCellAction: (actionIndex: number) => void
}

const EditorContext = createContext<IEditorContext>({
  selectedCells: [],
  selectedColors: [],
  toggleSelectedCells() {},
  setSelectedCells() {},
  setSelectedColors() {},
  addCellAction() {},
  removeCellAction() {},
})

export default EditorContext
