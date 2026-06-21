import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('exposes a status role with an accessible label', () => {
    render(<Spinner label="Memuat" />)
    const status = screen.getByRole('status')
    expect(status).toBeInTheDocument()
    expect(status).toHaveTextContent('Memuat')
  })

  it('merges a custom className onto the spinner element', () => {
    render(<Spinner label="Loading" className="text-blue-500" />)
    expect(screen.getByRole('status').firstChild).toHaveClass('text-blue-500')
  })
})
