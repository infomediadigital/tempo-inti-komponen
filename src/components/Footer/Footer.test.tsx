import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders as a contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders section headings', () => {
    render(<Footer />)
    expect(screen.getByText('Media Sosial')).toBeInTheDocument()
    expect(screen.getByText('Jaringan Media')).toBeInTheDocument()
    expect(screen.getByText('Informasi')).toBeInTheDocument()
  })

  it('renders media network and info links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Tempo Magazine' })).toHaveAttribute(
      'href',
      'https://magz.tempo.co/',
    )
    expect(screen.getByRole('link', { name: 'Tentang Kami' })).toBeInTheDocument()
  })

  it('shows the current Jakarta year in the copyright', () => {
    render(<Footer />)
    const year = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
    }).format(new Date())
    expect(screen.getByText(new RegExp(`© ${year} Tempo`))).toBeInTheDocument()
  })

  it('merges a custom className', () => {
    render(<Footer className="mt-10" />)
    expect(screen.getByRole('contentinfo')).toHaveClass('mt-10')
  })
})
