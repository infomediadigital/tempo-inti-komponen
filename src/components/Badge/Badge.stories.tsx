import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'neutral', 'success', 'danger'] },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
export const Neutral: Story = { args: { variant: 'neutral', children: 'Draft' } }
export const Success: Story = { args: { variant: 'success', children: 'Aktif' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Tidak Aktif' } }
