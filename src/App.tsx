import React from 'react'
import TableEditor from './components/table/TableEditor'
import TableProvider from './context/TableProvider'

const App = () => (
  <TableProvider>
    <TableEditor />
  </TableProvider>
)

export default App
