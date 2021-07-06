export enum SitutationTypes {
  OPEN_RAISE = 'open raise',
  COLD_FOR_BET = 'cold for bet',
  THREE_BET = 'three bet',
  LIMP = 'limp',
  SQUEEZE = 'squeeze',
}

export enum PositionTypes {
  SB = 'small blind',
  BB = 'big blind',
  UTG = 'under the gun',
  BTN = 'button',
  EP = 'early position',
  MP = 'medium position',
  CO = 'cutoff',
  HJ = 'the hijack',
}

export type CellAction = { color: string; chance: number; legend: string }
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

export interface TableInterface {
  id: string | null
  cells: Cell[]
  name: string
  situation: SitutationTypes
  position: PositionTypes
}
