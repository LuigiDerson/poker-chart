import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test.todo('renders welcome message', () => {
  render(<App />)
  expect(screen.getByText('Edit Selection')).toBeInTheDocument()
})
