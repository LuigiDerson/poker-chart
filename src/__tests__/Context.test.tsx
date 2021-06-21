import cards from '../helpers/cards'
import { normalizeModel } from '../context/state-helpers'

const mockState = {
  cells: [
    {
      id: '1',
      pair: 'AA',
      position: { x: 0, y: 0 },
      actions: [{ color: '#000', chance: 50 }],
    },
  ],
}

test('should normalize initial state', () => {
  const normalized = normalizeModel(mockState.cells)
  expect(normalized).toMatchObject({
    byId: {
      '00': mockState.cells[0],
    },
    allIds: ['00'],
  })
})

test('should generate cells if initial state is empty', () => {
  const normalized = normalizeModel([])

  expect(normalized.allIds.length).toBe(cards.length * cards.length)
  expect(normalized.byId['01']).toMatchObject({
    id: '01',
    pair: 'KA',
    position: { x: 1, y: 0 },
    actions: [],
  })
})

// test('should ', () => {})
