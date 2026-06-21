import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Initials: Story = {
  args: { initials: 'An', alt: 'Anjar', bordered: true },
}
export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/120', alt: 'User', size: 'lg' },
}
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" initials="An" />
      <Avatar size="md" initials="An" />
      <Avatar size="lg" initials="An" />
    </div>
  ),
}
