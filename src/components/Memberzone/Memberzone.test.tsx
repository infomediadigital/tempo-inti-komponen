import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemberzonePanel } from './MemberzonePanel'
import type { MemberzoneUser } from './types'

const user: MemberzoneUser = {
  id: 9896432,
  email: 'anjar@tempo.co',
  fullname: 'Anjar Pratama',
  initial: 'An',
  firstLetterOfName: 'A',
  vipSubscription: false,
  contentAccess: ['tempo_plus'],
}

describe('MemberzonePanel', () => {
  it('renders a trigger and opens the drawer on click', async () => {
    render(<MemberzonePanel user={user} templateFor="tempo" ssoUrl="https://sso.tempo.co" />)
    await userEvent.click(screen.getByRole('button', { name: 'Buka menu akun' }))
    expect(await screen.findByText('Anjar Pratama')).toBeInTheDocument()
    expect(screen.getByText('anjar@tempo.co')).toBeInTheDocument()
  })

  it('reflects subscription status from content access', async () => {
    render(<MemberzonePanel user={user} templateFor="tempo" ssoUrl="https://sso.tempo.co" defaultOpen />)
    // Tempo Plus is in contentAccess -> Aktif; Teras and VIP are not -> Tidak Aktif.
    expect(await screen.findByText('Tempo Plus')).toBeInTheDocument()
    expect(screen.getAllByText('Aktif').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Tidak Aktif').length).toBeGreaterThanOrEqual(1)
  })

  it('hides "Artikel Tersimpan" for the teras template', async () => {
    render(<MemberzonePanel user={user} templateFor="teras" ssoUrl="https://sso.tempo.co" defaultOpen />)
    expect(await screen.findByText('Informasi Akun')).toBeInTheDocument()
    expect(screen.queryByText('Artikel Tersimpan')).not.toBeInTheDocument()
  })

  it('calls onLogout when "Keluar" is activated', async () => {
    const onLogout = vi.fn()
    render(
      <MemberzonePanel
        user={user}
        templateFor="tempo"
        ssoUrl="https://sso.tempo.co"
        onLogout={onLogout}
        defaultOpen
      />,
    )
    await userEvent.click(await screen.findByText('Keluar'))
    expect(onLogout).toHaveBeenCalledOnce()
  })
})
