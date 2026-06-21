import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

function Sample() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="a">
        <AccordionTrigger>Section A</AccordionTrigger>
        <AccordionContent>Body A</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

describe('Accordion', () => {
  it('renders a collapsed trigger by default', () => {
    render(<Sample />)
    const trigger = screen.getByRole('button', { name: 'Section A' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands and collapses on click', async () => {
    render(<Sample />)
    const trigger = screen.getByRole('button', { name: 'Section A' })
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('honours defaultValue', () => {
    render(
      <Accordion type="single" collapsible defaultValue="a">
        <AccordionItem value="a">
          <AccordionTrigger>Section A</AccordionTrigger>
          <AccordionContent>Body A</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByRole('button', { name: 'Section A' })).toHaveAttribute('aria-expanded', 'true')
  })
})
