import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { ActionButton } from '../ActionButton'

describe('Header', () => {
  it('renders as a banner landmark with the default logo', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    // Logo is rendered in both the mobile and desktop bars (one is hidden via CSS).
    expect(screen.getAllByText('Tempo').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the mobile menu and user buttons and fires their callbacks', async () => {
    const onMenuClick = vi.fn()
    const onUserClick = vi.fn()
    render(<Header onMenuClick={onMenuClick} onUserClick={onUserClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Menu dan pencarian' }))
    await userEvent.click(screen.getByRole('button', { name: 'Masuk' }))
    expect(onMenuClick).toHaveBeenCalledOnce()
    expect(onUserClick).toHaveBeenCalledOnce()
  })

  it('renders desktop nav and actions', () => {
    render(
      <Header actions={<ActionButton>Langganan</ActionButton>}>
        <a href="#">Nasional</a>
      </Header>,
    )
    expect(screen.getByRole('link', { name: 'Nasional' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Langganan' })).toBeInTheDocument()
  })

  it('supports a custom logo and custom mobile labels', () => {
    render(<Header logo={<img src="/logo.svg" alt="Tempo" />} userLabel="Akun" />)
    expect(screen.getAllByRole('img', { name: 'Tempo' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: 'Akun' })).toBeInTheDocument()
  })

  it('is fixed to the top by default and relative when fixed is false', () => {
    const { rerender } = render(<Header />)
    expect(screen.getByRole('banner')).toHaveClass('fixed')
    rerender(<Header fixed={false} />)
    expect(screen.getByRole('banner')).toHaveClass('relative')
  })

  it('merges a custom className', () => {
    render(<Header className="shadow-md" />)
    expect(screen.getByRole('banner')).toHaveClass('shadow-md')
  })
})
