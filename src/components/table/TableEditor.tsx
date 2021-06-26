import React, { useContext, useState } from 'react'
import EditorContext from '../../context/EditorContext'
import ActionsForm from './ActionsForm'
import Table from './Table'

const TableEditor = () => {
  const [editMode, setEditMode] = useState(false)
  const { selectedCells, setSelectedCells } = useContext(EditorContext)

  return (
    <div className="container">
      {selectedCells.length > 0 && (
        <>
          <button
            style={{ display: 'block' }}
            onClick={() => setEditMode(!editMode)}
            type="button"
          >
            {editMode ? 'Close Edition' : 'Edit Selection'}
          </button>
          <button onClick={() => setSelectedCells([])}>Clear Selection</button>
        </>
      )}

      {/* <button style={{ display: 'block' }} onClick={() => 'save'}>
        Save
      </button> */}
      {editMode && <ActionsForm />}
      <Table />
    </div>
  )
}

export default TableEditor
