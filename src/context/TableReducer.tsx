import { IState } from './TableProvider'
import { CellAction } from './types'

export const UPDATE_CELLS = 'UPDATE_CELLS'

export type Action = {
  type: typeof UPDATE_CELLS
  payload: { cells: string[]; action: CellAction }
}

export default function TableReducer(state: IState, action: Action) {
  switch (action.type) {
    case UPDATE_CELLS:
      const { cells, action: newAction } = action.payload
      cells.forEach((position) => {
        state.cells.byId[position].actions.push(newAction)
      })
      break
    default:
      return state
  }
}
