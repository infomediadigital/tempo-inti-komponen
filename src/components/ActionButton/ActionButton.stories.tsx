import type { Meta, StoryObj } from '@storybook/react-vite'
import { Crown, LogIn } from 'lucide-react'
import { ActionButton } from './ActionButton'

const meta: Meta<typeof ActionButton> = {
  title: 'Components/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  args: {
    children: 'Langganan',
    variant: 'primary',
    styleType: 'fill',
    size: 'small',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
    styleType: { control: 'inline-radio', options: ['fill', 'outline'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ActionButton>

/** Primary / Fill / Small / Default — exact header spec (141 × 32). */
export const PrimarySmall: Story = {
  args: { className: 'w-[141px]' },
}

/** "Langganan" with a leading icon. */
export const Langganan: Story = {
  args: {
    children: 'Langganan',
    showIconLeft: true,
    iconLeft: <Crown className="h-4 w-4" />,
  },
}

/** "Masuk" with a leading icon. */
export const Masuk: Story = {
  args: {
    children: 'Masuk',
    variant: 'secondary',
    styleType: 'outline',
    showIconLeft: true,
    iconLeft: <LogIn className="h-4 w-4" />,
  },
}

export const Outline: Story = { args: { styleType: 'outline' } }
export const Loading: Story = { args: { loading: true } }
export const Disabled: Story = { args: { disabled: true } }
