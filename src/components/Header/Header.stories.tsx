import type { Meta, StoryObj } from '@storybook/react'
import { Crown, LogIn } from 'lucide-react'
import { Header } from './Header'
import { ActionButton } from '../ActionButton'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Responsive top navigation bar. Below `md` it renders the 49px mobile bar ' +
          '(menu/search · centered logo · user/login). At `md` and up it renders the 64px ' +
          'desktop bar (logo · nav · actions). Resize the canvas or use the toolbar viewport ' +
          'to switch between them.',
      },
    },
  },
  argTypes: {
    fixed: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Header>

/** Desktop bar with the default logo and a Primary / Fill / Small button. View at md+ width. */
export const Default: Story = {
  args: {
    fixed: false,
    actions: (
      <ActionButton variant="primary" styleType="fill" size="small" className="w-[141px]">
        Langganan
      </ActionButton>
    ),
  },
}

/** Header with navigation links between the logo and the action button. */
export const WithNavigation: Story = {
  args: {
    fixed: false,
    children: (
      <>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">
          Nasional
        </a>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">
          Dunia
        </a>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">
          Ekonomi
        </a>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">
          Olahraga
        </a>
      </>
    ),
    actions: (
      <>
        <ActionButton variant="secondary" styleType="outline" showIconLeft iconLeft={<LogIn className="h-4 w-4" />}>
          Masuk
        </ActionButton>
        <ActionButton variant="primary" styleType="fill" showIconLeft iconLeft={<Crown className="h-4 w-4" />}>
          Langganan
        </ActionButton>
      </>
    ),
  },
}

/** Mobile bar (< md): logo left, user + menu/search icons on the right. */
export const Mobile: Story = {
  args: {
    fixed: false,
    onMenuClick: () => {},
    onUserClick: () => {},
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  decorators: [
    (Story) => (
      <div className="w-[360px] border border-neutral-200">
        <Story />
      </div>
    ),
  ],
}
