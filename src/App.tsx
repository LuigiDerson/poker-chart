import React from 'react'
import TableEditor from './components/table/TableEditor'
import TableContextProvider from './context/TableContext'

const App = () => (
  <TableContextProvider>
    <TableEditor />
  </TableContextProvider>
)

export default App
