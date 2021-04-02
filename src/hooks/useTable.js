import { useState } from 'react'
import cards from '../helpers/cards'

/*
-pair: Hand pair
-actions: Possible actions 6 max.
--color: Action color
--chance: number between 1 to 100
*/

const createDefaultState = () => {
  const state = { byId: {}, allIds: [] }

  for (let r = 0; r < cards.length; r++) {
    for (let c = 0; c < cards.length; c++) {
      const pair = cards[r] + cards[c]
      const cell = { pair: pair, actions: [] }
      state.byId[pair] = cell
      state.allIds.push(pair)
    }
  }
  return state
}

const defaultState = createDefaultState()

export default function useTable() {
  const [table, setTable] = useState(defaultState)

  const updateCell = (pair, action) => {
    const currentPair = table.byId[pair]
    setTable({
      ...table,
      byId: {
        ...table.byId,
        [pair]: {
          ...currentPair,
          actions: [...currentPair.actions, action],
        },
      },
    })
  }

  return { table, updateCell }
}
