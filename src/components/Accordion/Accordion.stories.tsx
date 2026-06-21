import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Accordion>

/** Single-open accordion (only one item expanded at a time). */
export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="multimedia" className="max-w-md">
      <AccordionItem value="multimedia">
        <AccordionTrigger>Multimedia</AccordionTrigger>
        <AccordionContent>Foto, Video, Infografik, Podcast</AccordionContent>
      </AccordionItem>
      <AccordionItem value="nasional">
        <AccordionTrigger>Nasional</AccordionTrigger>
        <AccordionContent>Hukum, Politik, Nasional</AccordionContent>
      </AccordionItem>
      <AccordionItem value="ekonomi">
        <AccordionTrigger>Ekonomi</AccordionTrigger>
        <AccordionContent>Bisnis, Makro, Finansial</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

/** Multiple-open accordion (independent items). */
export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="max-w-md">
      <AccordionItem value="a">
        <AccordionTrigger>Kanal</AccordionTrigger>
        <AccordionContent>Nasional, Dunia, Ekonomi, Olahraga</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Jaringan</AccordionTrigger>
        <AccordionContent>Teras, Cantika, Gooto</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
