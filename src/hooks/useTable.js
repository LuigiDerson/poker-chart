import { useState, useEffect } from 'react'
import cards from '../helpers/cards'

//TODO: Define cells schema

/*
-pair: Hand pair
-actions: Possible actions 6 max.
--color: Action color
--chance: number between 1 to 100
*/

const defaultCell = {
  pair: '',
  actions: [
    // {
    //   color: 'lightgray',
    //   chance: 70,
    // },
    // {
    //   color: 'pink',
    //   chance: 30,
    // },
  ],
}

export default function useTable() {
  const [rows, setRows] = useState(() => {
    return cards.map((card, _, array) => {
      const table = []
      array.forEach((currentCard) =>
        table.push({ ...defaultCell, pair: card + currentCard })
      )
      return table
    })
  })

  const updateCell = (pair, actions) => {
    setRows(
      rows.map((cell) => (cell.pair === pair ? { ...cell, actions } : cell))
    )
  }

  useEffect(() => {
    //fetch api
  }, [])

  return { rows, updateCell }
}
