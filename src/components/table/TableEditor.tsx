import React, { useState } from 'react'
import ActionsForm from './ActionsForm'
import Table from './Table'

const TableEditor = () => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      <button
        style={{ display: 'block' }}
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? 'Close Edition' : 'Edit Selection'}
      </button>
      <button style={{ display: 'block' }} onClick={() => 'save'}>
        Save
      </button>
      {editMode && <ActionsForm />}
      <Table />
    </div>
  )
}

export default TableEditor
