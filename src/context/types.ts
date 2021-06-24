export type CellAction = { color: string; chance: number }
export type Position = { x: number; y: number }

export interface Cell {
  id: string
  pair: string
  position: Position
  actions: CellAction[]
}

type ObjectById<T> = {
  [key: string]: T
}

type Row = Cell[]
export type TableRows = Row[]

export interface NormalizedState<T> {
  byId: ObjectById<T>
  allIds: string[]
}
