import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { CellAction } from '../../context/types'
import EditorContext from '../../context/EditorContext'

const ActionsForm = () => {
  const { addCellAction, removeCellAction } = useContext(EditorContext)

  const [actions, setActions] = useState<CellAction[]>([])
  const [chance, setChance] = useState(0)
  const [color, setColor] = useState('')
  const [legend, setLegend] = useState('')
  const [maxChance, setMaxChance] = useState(100)

  const removeAction = (index: number) => () => {
    const updatedActions = actions.filter((_, idx) => idx !== index)
    setMaxChance(maxChance + actions[index].chance)
    setActions(updatedActions)

    removeCellAction(index)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!chance) return

    const action = { color, chance, legend }

    setMaxChance(maxChance - chance)
    setChance(0)
    setColor('')
    setLegend('')

    setActions((prevState) => [...prevState, action])
    addCellAction(action)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Legend
            <input
              type="text"
              value={legend}
              onChange={(e) => setLegend(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Color
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Chance
            <input
              type="range"
              min="0"
              max={maxChance}
              value={chance}
              step="10"
              onChange={(e) => setChance(Number(e.target.value))}
              required
            />
          </label>

          <span>Value: {chance}</span>
          <span>Probability: {maxChance}</span>
        </div>

        <button type="submit" disabled={!maxChance}>
          Add
        </button>
      </form>
      <div>
        {actions.map(({ color, chance }, index) => {
          return (
            <div key={chance + color}>
              {color}, {chance}
              <button type="button" onClick={removeAction(index)}>
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ActionsForm.propTypes = {
  selectedPair: PropTypes.string,
  updateCell: PropTypes.func,
}

export default ActionsForm
