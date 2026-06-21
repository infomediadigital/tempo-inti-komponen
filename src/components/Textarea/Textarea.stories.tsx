import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    label: 'Message',
    placeholder: 'Write your message…',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {}
export const WithHelperText: Story = {
  args: { helperText: 'Maximum 500 characters.' },
}
export const WithError: Story = {
  args: { error: 'This field is required.' },
}
export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Cannot edit this.' },
}
