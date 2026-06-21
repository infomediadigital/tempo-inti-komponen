import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders with the alert role', () => {
    render(<Alert>Something happened</Alert>)
    expect(screen.getByRole('alert')).toHaveTextContent('Something happened')
  })

  it('renders an optional title', () => {
    render(<Alert title="Heads up">Body</Alert>)
    expect(screen.getByText('Heads up')).toBeInTheDocument()
  })

  it('merges a custom className', () => {
    render(<Alert className="mt-4">content</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('mt-4')
  })
})
