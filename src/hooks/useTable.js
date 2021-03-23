import { useState, useEffect } from 'react'
import cards from '../helpers/cards'

//TODO: Define cells schema

export default function useTable() {
  const [rows] = useState(() => {
    return cards.map((card, _, array) => {
      const table = []
      array.forEach((currentCard) => table.push({ value: card + currentCard }))
      return table
    })
  })

  useEffect(() => {
    //fetch api
  }, [])

  return rows
}
