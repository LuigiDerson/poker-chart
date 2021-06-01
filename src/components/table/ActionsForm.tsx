import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { CellAction, TableContext } from '../../context/TableContext'
import { UPDATE_CELLS, CLEAR_SELECTED_PAIRS } from '../../context/TableReducer'

const ActionsForm = () => {
  const { selectedPairs, dispatch } = useContext(TableContext)

  const [actions, setActions] = useState<CellAction[]>([])
  const [chance, setChance] = useState('0')
  const [color, setColor] = useState('')
  const [maxChance, setMaxChance] = useState(100)

  const onChangeChance: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value
    setChance(value)
  }
  // TODO: replace chance with id ?
  const removeAction = (chance: number) => () => {
    const updatedActions = actions.filter((action) => action.chance !== chance)
    setMaxChance(maxChance + chance)
    setActions(updatedActions)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const action = { color, chance: +chance }
    setMaxChance(maxChance - parseInt(chance))
    setChance('0')
    setColor('')

    setActions((prevState) => [...prevState, { color, chance: +chance }])
    dispatch({
      type: UPDATE_CELLS,
      payload: { pairs: selectedPairs, action },
    })
  }

  return (
    <div>
      <button onClick={() => dispatch({ type: CLEAR_SELECTED_PAIRS })}>
        Clear Selection
      </button>
      <form onSubmit={onSubmit}>
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
              onChange={onChangeChance}
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
        {actions.map(({ color, chance }) => {
          return (
            <div key={chance + color}>
              {color}, {chance}
              <button type="button" onClick={removeAction(chance)}>
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
