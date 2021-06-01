import { DefaultReducerState, CellAction, Pair } from './TableContext'

export const UPDATE_CELLS = 'UPDATE_CELLS'
export const TOGGLE_PAIRS = 'TOGGLE_PAIRS'
export const CLEAR_SELECTED_PAIRS = 'CLEAR_SELECTED_PAIRS'

export type Action =
  | {
      type: typeof UPDATE_CELLS
      payload: { pairs: Pair[]; action: CellAction }
    }
  | {
      type: typeof TOGGLE_PAIRS
      payload: { pairs: Pair[] }
    }
  | {
      type: typeof CLEAR_SELECTED_PAIRS
    }

export default function TableReducer(
  state: DefaultReducerState,
  action: Action
) {
  switch (action.type) {
    case UPDATE_CELLS:
      const { pairs: pairsList, action: newAction } = action.payload
      pairsList.forEach((pair) => {
        state.table.byId[pair].actions.push(newAction)
      })
      break
    case TOGGLE_PAIRS:
      action.payload.pairs.forEach((pair) => {
        const itemIndex = state.selectedPairs.indexOf(pair)
        if (itemIndex > -1) {
          state.selectedPairs.splice(itemIndex, 1)
        } else {
          state.selectedPairs.push(pair)
        }
      })
      break
    case CLEAR_SELECTED_PAIRS:
      state.selectedPairs = []
      break
    default:
      return state
  }
}
