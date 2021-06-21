import { createContext } from 'react'
import { Position } from './types'

interface IEditorContext {
  selectedCells: string[]
  selectedColors: string[]
  toggleSelectedCells: (cells: Position[]) => void
  setSelectedColors: (color: Position[]) => void
}

const EditorContext = createContext<IEditorContext>({
  selectedCells: [],
  selectedColors: [],
  toggleSelectedCells: () => {},
  setSelectedColors: () => {},
})

export default EditorContext
