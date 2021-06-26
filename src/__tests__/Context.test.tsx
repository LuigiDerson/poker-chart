import cards from '../helpers/cards'
import { normalizeModel } from '../context/state-helpers'

const mockState = {
  cells: [
    {
      id: '1',
      pair: 'AA',
      position: { x: 0, y: 0 },
      actions: [{ color: '#000', chance: 50, legend: 'Some legend' }],
    },
  ],
}

test('should normalize initial state', () => {
  const normalized = normalizeModel(mockState.cells)
  expect(normalized).toMatchObject({
    byId: {
      '0.0': mockState.cells[0],
    },
    allIds: ['0.0'],
  })
})

test('should generate cells if initial state is empty', () => {
  const normalized = normalizeModel([])

  expect(normalized.allIds.length).toBe(cards.length * cards.length)
  expect(normalized.byId['0.1']).toMatchObject({
    id: '0.1',
    pair: 'AK',
    position: { x: 0, y: 1 },
    actions: [],
  })
})
