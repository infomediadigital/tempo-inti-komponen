import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    placeholder: 'you@tempo.co',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}
export const WithHelperText: Story = {
  args: { helperText: 'We will never share your email.' },
}
export const WithError: Story = {
  args: { error: 'Please enter a valid email address.', defaultValue: 'invalid' },
}
export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'disabled@tempo.co' },
}
