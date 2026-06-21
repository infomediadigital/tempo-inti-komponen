import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders uppercased initials when no src is provided', () => {
    render(<Avatar initials="an" alt="Anjar" />)
    expect(screen.getByText('AN')).toBeInTheDocument()
  })

  it('renders an image when src is provided', () => {
    render(<Avatar src="/me.png" alt="Me" />)
    expect(screen.getByRole('img', { name: 'Me' })).toBeInTheDocument()
  })

  it('merges a custom className', () => {
    render(<Avatar initials="An" className="ring-2" />)
    expect(screen.getByText('AN').parentElement).toHaveClass('ring-2')
  })
})
