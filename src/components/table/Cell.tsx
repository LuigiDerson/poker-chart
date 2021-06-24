import React, {
  useContext,
  useState,
  useCallback,
  memo,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { Cell as CellProps } from '../../context/types'
import EditorContext from '../../context/EditorContext'

const Cell = ({ pair = '', actions = [], id = '', position }: CellProps) => {
  const [selected, setSelected] = useState(false)
  const { toggleSelectedCells, selectedCells } = useContext(EditorContext)

  const toggleCell = useCallback(() => {
    setSelected(!selected)
    toggleSelectedCells([id])
  }, [id, toggleSelectedCells, selected])

  useEffect(() => {
    if (selected && selectedCells.length === 0) {
      setSelected(false)
    }
  }, [selected, selectedCells])

  return (
    <div
      onClick={() => toggleCell()}
      className={`square ${selected ? 'square--selected' : ''}`.trim()}
    >
      <span style={{ position: 'absolute' }}>{pair}</span>
      {Boolean(actions.length) && (
        <div className="actions-container">
          {actions.map(({ color, chance }) => {
            return (
              <div
                key={color} // TODO: change this
                style={{
                  width: `${chance}%`,
                  backgroundColor: color,
                }}
              ></div>
            )
          })}
        </div>
      )}
    </div>
  )
}

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  pair: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      change: PropTypes.number,
    })
  ),
}

export default memo(Cell)
