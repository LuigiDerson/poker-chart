import { createContext } from 'react'
import { CellAction } from './types'

interface IEditorContext {
  selectedCells: string[]
  selectedColors: string[]
  toggleSelectedCells: (ids: string[]) => void
  setSelectedColors: (color: string[]) => void
  setSelectedCells: (cells: string[] | []) => void
  updateSelectedCells: (payload: {
    cells: string[]
    action: CellAction
  }) => void
}

const EditorContext = createContext<IEditorContext>({
  selectedCells: [],
  selectedColors: [],
  toggleSelectedCells() {},
  setSelectedCells() {},
  setSelectedColors() {},
  updateSelectedCells() {},
})

export default EditorContext
