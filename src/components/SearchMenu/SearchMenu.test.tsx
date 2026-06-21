import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchInput } from './SearchInput'
import { SearchTabs } from './SearchTabs'
import { SearchSummary } from './SearchSummary'

describe('SearchInput', () => {
  it('renders the value and reports keystrokes', async () => {
    const onValueChange = vi.fn()
    render(<SearchInput value="" onValueChange={onValueChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'a')
    expect(onValueChange).toHaveBeenCalledWith('a')
  })

  it('submits the value on Enter', async () => {
    const onSubmit = vi.fn()
    render(<SearchInput value="pemilu" onSubmit={onSubmit} />)
    await userEvent.type(screen.getByRole('textbox'), '{Enter}')
    expect(onSubmit).toHaveBeenCalledWith('pemilu')
  })

  it('shows the clear button only when there is a value and clears on click', async () => {
    const onValueChange = vi.fn()
    const onClear = vi.fn()
    const { rerender } = render(<SearchInput value="" onValueChange={onValueChange} onClear={onClear} />)
    expect(screen.queryByRole('button', { name: 'Bersihkan pencarian' })).not.toBeInTheDocument()

    rerender(<SearchInput value="pemilu" onValueChange={onValueChange} onClear={onClear} />)
    await userEvent.click(screen.getByRole('button', { name: 'Bersihkan pencarian' }))
    expect(onValueChange).toHaveBeenCalledWith('')
    expect(onClear).toHaveBeenCalledOnce()
  })
})

describe('SearchTabs', () => {
  const tabs = [
    { label: 'Artikel', value: 'search' },
    { label: 'Mingguan', value: 'mingguan' },
  ]

  it('marks the active tab as selected', () => {
    render(<SearchTabs tabs={tabs} activeValue="search" />)
    expect(screen.getByRole('tab', { name: 'Artikel' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Mingguan' })).toHaveAttribute('aria-selected', 'false')
  })

  it('calls onTabChange for button tabs', async () => {
    const onTabChange = vi.fn()
    render(<SearchTabs tabs={tabs} activeValue="search" onTabChange={onTabChange} />)
    await userEvent.click(screen.getByRole('tab', { name: 'Mingguan' }))
    expect(onTabChange).toHaveBeenCalledWith('mingguan')
  })

  it('renders link tabs with hrefs', () => {
    render(
      <SearchTabs
        activeValue="search"
        tabs={[{ label: 'Artikel', value: 'search', href: '/search' }]}
      />,
    )
    expect(screen.getByRole('tab', { name: 'Artikel' })).toHaveAttribute('href', '/search')
  })
})

describe('SearchSummary', () => {
  it('renders the category, count, and query', () => {
    render(<SearchSummary category="ARTIKEL" count={128} query="pemilu" />)
    expect(screen.getByText('HASIL PENCARIAN ARTIKEL')).toBeInTheDocument()
    expect(screen.getByText(/Ada 128 artikel/)).toBeInTheDocument()
    expect(screen.getByText('"pemilu"')).toBeInTheDocument()
  })
})
