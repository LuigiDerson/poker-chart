import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TableContext } from '../../context/TableContext'

const ActionsForm = ({ currentPair = '' }) => {
  const [state, setState] = useContext(TableContext)
  const [actions, setActions] = useState([])
  const [chance, setChance] = useState('0')
  const [color, setColor] = useState('')
  const [maxChance, setMaxChance] = useState(100)

  const onChangeChance = (event) => {
    const value = event.target.value
    setChance(value)
  }
  // TODO: replace chance with id ?
  const removeAction = (chance) => () => {
    const updatedActions = actions.filter((action) => action.chance !== chance)
    setMaxChance(maxChance + parseInt(chance))
    setActions(updatedActions)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setMaxChance(maxChance - parseInt(chance))
    setChance('0')
    setColor('')
    setActions((prevState) => [...prevState, { color, chance }])
    setState({
      ...state,
      currentActions: [...state.currentActions, { color, chance }],
    })
  }

  return (
    <div>
      <h3>Add Action</h3>
      <p>{currentPair}</p>
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
      <button type="button" onClick={() => 'save'}>
        Save
      </button>
    </div>
  )
}

ActionsForm.propTypes = {
  currentPair: PropTypes.string,
}

export default ActionsForm
