import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FooterSection } from './FooterSection'

describe('FooterSection', () => {
  it('renders as a contentinfo landmark', () => {
    render(<FooterSection />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders section headings', () => {
    render(<FooterSection />)
    for (const title of ['NEWS', 'KNOWLEDGE', 'LIFESTYLE', 'YOUTH']) {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('Social Media').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Download Tempo App').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Information').length).toBeGreaterThan(0)
  })

  it('renders category and info links', () => {
    render(<FooterSection />)
    expect(screen.getAllByRole('link', { name: 'Tempo Store' })[0]).toHaveAttribute(
      'href',
      'https://store.tempo.co/',
    )
    expect(screen.getAllByRole('link', { name: 'About Us' })[0]).toHaveAttribute(
      'href',
      'https://en.tempo.co/about-us',
    )
    expect(screen.getAllByRole('link', { name: 'Tempo Privacy Policy' }).length).toBeGreaterThan(0)
  })

  it('renders social and app-store links', () => {
    render(<FooterSection />)
    expect(screen.getAllByRole('link', { name: 'Instagram' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Get it on Google Play' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Download on the App Store' }).length).toBeGreaterThan(0)
  })

  it('renders the English editorial quote', () => {
    render(<FooterSection />)
    expect(screen.getAllByText(/The foundation of our journalism/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/March 6, 1971/).length).toBeGreaterThan(0)
  })

  it('shows the current Jakarta year in the copyright', () => {
    render(<FooterSection />)
    const year = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
    }).format(new Date())
    expect(screen.getAllByText(new RegExp(`© ${year} Tempo English`)).length).toBeGreaterThan(0)
  })

  it('renders the Tempo English logo for mobile', () => {
    render(<FooterSection />)
    expect(screen.getByAltText('Tempo English')).toBeInTheDocument()
  })

  it('renders privacy and terms links in the mobile copyright', () => {
    render(<FooterSection />)
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute(
      'href',
      'https://en.tempo.co/privacy-policy',
    )
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toHaveAttribute(
      'href',
      'https://en.tempo.co/terms-of-service',
    )
  })

  it('merges a custom className', () => {
    render(<FooterSection className="mt-10" />)
    expect(screen.getByRole('contentinfo')).toHaveClass('mt-10')
  })
})
