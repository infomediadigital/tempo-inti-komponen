import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>Aktif</Badge>)
    expect(screen.getByText('Aktif')).toBeInTheDocument()
  })

  it('merges a custom className', () => {
    render(<Badge className="ml-auto">Aktif</Badge>)
    expect(screen.getByText('Aktif')).toHaveClass('ml-auto')
  })

  it('applies the danger variant classes', () => {
    render(<Badge variant="danger">Tidak Aktif</Badge>)
    expect(screen.getByText('Tidak Aktif')).toHaveClass('text-status-danger')
  })
})
