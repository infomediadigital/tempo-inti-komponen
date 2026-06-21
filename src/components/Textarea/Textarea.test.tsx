import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('renders with an associated label', () => {
    render(<Textarea label="Message" />)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('merges a custom className', () => {
    render(<Textarea label="Message" className="h-40" />)
    expect(screen.getByLabelText('Message')).toHaveClass('h-40')
  })

  it('marks the field invalid and links the error message', () => {
    render(<Textarea label="Message" error="Required field" />)
    const field = screen.getByLabelText('Message')
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAccessibleDescription('Required field')
  })

  it('accepts typed input', async () => {
    render(<Textarea label="Message" />)
    const field = screen.getByLabelText('Message')
    await userEvent.type(field, 'hello')
    expect(field).toHaveValue('hello')
  })

  it('supports the disabled state', () => {
    render(<Textarea label="Message" disabled />)
    expect(screen.getByLabelText('Message')).toBeDisabled()
  })
})
