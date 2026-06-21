import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Heads up',
    children: 'Your subscription will renew next month.',
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = { args: { variant: 'info' } }
export const Success: Story = { args: { variant: 'success', title: 'Berhasil' } }
export const Warning: Story = { args: { variant: 'warning', title: 'Perhatian' } }
export const Danger: Story = { args: { variant: 'danger', title: 'Gagal' } }
export const WithoutIcon: Story = { args: { hideIcon: true } }
