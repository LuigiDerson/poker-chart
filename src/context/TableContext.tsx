import React, { createContext, ReactNode, useState } from 'react'

export const TableContext = createContext([{}, () => {}])

interface TableContextProps {
  children: ReactNode
}

const TableContextProvider = ({ children }: TableContextProps) => {
  const [state, setState] = useState({ selectedPair: '', currentActions: [] })
  return (
    <TableContext.Provider value={[state, setState]}>
      {children}
    </TableContext.Provider>
  )
}

export default TableContextProvider
