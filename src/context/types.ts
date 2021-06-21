export type CellAction = { color: string; chance: number }
export type Position = { x: number; y: number }

export interface Cell {
  id: string
  pair: string
  position: Position
  actions: CellAction[]
}

export interface ObjectById<T> {
  [key: string]: T
}

export type Row = Cell[]
export type TableRows = Row[]
export type UpdateCellsReducer = (pairs: string[], action: CellAction) => void

export interface NormalizedState<T> {
  byId: ObjectById<T>
  allIds: string[]
}
