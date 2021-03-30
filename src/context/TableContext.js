import { createContext, useState } from 'react'

export const TableContext = createContext([{}, () => {}])

const TableContextProvider = ({ children }) => {
  const [state, setState] = useState({ selectedPair: '', currentActions: [] })
  return (
    <TableContext.Provider value={[state, setState]}>
      {children}
    </TableContext.Provider>
  )
}

export default TableContextProvider
