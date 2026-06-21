import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('renders with an associated label', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('merges a custom className', () => {
    render(<Input label="Email" className="w-full" />)
    expect(screen.getByLabelText('Email')).toHaveClass('w-full')
  })

  it('marks the field invalid and links the error message', () => {
    render(<Input label="Email" error="Required field" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Required field')
  })

  it('links helper text via aria-describedby', () => {
    render(<Input label="Email" helperText="Use your work email" />)
    expect(screen.getByLabelText('Email')).toHaveAccessibleDescription('Use your work email')
  })

  it('accepts typed input', async () => {
    const onChange = vi.fn()
    render(<Input label="Email" onChange={onChange} />)
    await userEvent.type(screen.getByLabelText('Email'), 'hi')
    expect(onChange).toHaveBeenCalled()
  })

  it('supports the disabled state', () => {
    render(<Input label="Email" disabled />)
    expect(screen.getByLabelText('Email')).toBeDisabled()
  })
})
