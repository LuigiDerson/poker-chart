import { TableInterface } from '../context/types'

export const saveTable = (table: TableInterface) => {
  const id = +new Date()

  const parsedTable = JSON.stringify({
    id,
    ...table,
  })

  window.localStorage.setItem(id.toString(), parsedTable)
  return id
}

export const getAllTables = (): TableInterface[] => {
  return Object.values(window.localStorage).map((record) => JSON.parse(record))
}

export const getTableById = (id: string) => {
  const table = window.localStorage.getItem(id) || ''
  return JSON.parse(table)
}

export const removeTableById = (id: string) => {
  window.localStorage.removeItem(id)
}

export const clear = () => {
  window.localStorage.clear()
}
