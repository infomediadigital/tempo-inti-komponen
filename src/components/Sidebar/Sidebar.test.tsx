import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

function Sample({ defaultOpen = false }: { defaultOpen?: boolean }) {
  return (
    <Sidebar.Root defaultOpen={defaultOpen}>
      <Sidebar.Trigger>Buka Menu</Sidebar.Trigger>
      <Sidebar.Content side="left">
        <Sidebar.Header>
          <Sidebar.Title>Menu</Sidebar.Title>
          <Sidebar.Description className="sr-only">Menu navigasi</Sidebar.Description>
        </Sidebar.Header>
        <Sidebar.Body>
          <a href="/nasional">Nasional</a>
        </Sidebar.Body>
      </Sidebar.Content>
    </Sidebar.Root>
  )
}

describe('Sidebar', () => {
  it('is closed until the trigger is clicked', async () => {
    render(<Sample />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Buka Menu' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Nasional' })).toBeInTheDocument()
  })

  it('renders open content and a close button when defaultOpen', async () => {
    render(<Sample defaultOpen />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    const close = screen.getByRole('button', { name: 'Close' })
    await userEvent.click(close)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
