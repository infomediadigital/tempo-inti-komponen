import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BottomNavbar, type BottomNavItem } from './BottomNavbar'

const meta: Meta<typeof BottomNavbar> = {
  title: 'Components/BottomNavbar',
  component: BottomNavbar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['beranda', 'harian', 'mingguan', 'tempo-plus'],
    },
  },
}

export default meta
type Story = StoryObj<typeof BottomNavbar>

export const Default: Story = {
  args: { activeItem: 'beranda' },
  decorators: [
    (Story) => (
      <div className="relative h-[100px] w-[360px] overflow-hidden bg-neutral-100">
        <Story />
      </div>
    ),
  ],
}

export const Interactive: Story = {
  render: () => {
    const Demo = () => {
      const [active, setActive] = useState<BottomNavItem>('beranda')
      return (
        <div className="relative h-[100px] w-[360px] overflow-hidden bg-neutral-100">
          <p className="px-4 pt-4 text-sm text-neutral-500">Active: {active}</p>
          <BottomNavbar activeItem={active} onItemClick={setActive} />
        </div>
      )
    }
    return <Demo />
  },
}

export const Harian: Story = {
  args: { activeItem: 'harian' },
  decorators: Default.decorators,
}

export const Mingguan: Story = {
  args: { activeItem: 'mingguan' },
  decorators: Default.decorators,
}

export const TempoPlus: Story = {
  args: { activeItem: 'tempo-plus' },
  decorators: Default.decorators,
}
