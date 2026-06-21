import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ActionButton } from './ActionButton'

describe('ActionButton', () => {
  it('renders its label', () => {
    render(<ActionButton>Langganan</ActionButton>)
    expect(screen.getByRole('button', { name: 'Langganan' })).toBeInTheDocument()
  })

  it('applies the 1px radius by default', () => {
    render(<ActionButton>Langganan</ActionButton>)
    expect(screen.getByRole('button')).toHaveClass('rounded-[1px]')
  })

  it('hides icons unless explicitly shown', () => {
    const { rerender } = render(
      <ActionButton iconLeft={<span data-testid="icon" />}>Masuk</ActionButton>,
    )
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
    rerender(
      <ActionButton showIconLeft iconLeft={<span data-testid="icon" />}>
        Masuk
      </ActionButton>,
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('fires onClick and is blocked when disabled', async () => {
    const onClick = vi.fn()
    const { rerender } = render(<ActionButton onClick={onClick}>Go</ActionButton>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()

    rerender(
      <ActionButton onClick={onClick} disabled>
        Go
      </ActionButton>,
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('merges a custom className', () => {
    render(<ActionButton className="w-[141px]">Langganan</ActionButton>)
    expect(screen.getByRole('button')).toHaveClass('w-[141px]')
  })
})
