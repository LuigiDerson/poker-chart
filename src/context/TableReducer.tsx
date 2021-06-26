import { IState } from './TableProvider'
import { CellAction } from './types'

export const ADD_CELL_ACTION = 'ADD_CELL_ACTION'
export const REMOVE_CELL_ACTION = 'REMOVE_CELL_ACTION'

export type Action =
  | {
      type: typeof ADD_CELL_ACTION
      payload: { cells: string[]; action: CellAction }
    }
  | {
      type: typeof REMOVE_CELL_ACTION
      payload: { cells: string[]; actionIndex: number }
    }

export default function TableReducer(state: IState, action: Action) {
  switch (action.type) {
    case ADD_CELL_ACTION: {
      const { cells, action: newAction } = action.payload
      cells.forEach((id) => {
        state.cells.byId[id].actions.push(newAction)
      })
      state.actions.push(newAction)
      break
    }
    case REMOVE_CELL_ACTION: {
      const { cells, actionIndex } = action.payload
      cells.forEach((id) => {
        state.cells.byId[id].actions.splice(actionIndex, 1)
      })
      state.actions.splice(actionIndex, 1)
      break
    }
    default:
      return state
  }
}
