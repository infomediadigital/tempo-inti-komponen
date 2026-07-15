import type { Meta, StoryObj } from '@storybook/react-vite'
import { AppSwitcher } from './AppSwitcher'

const meta: Meta<typeof AppSwitcher> = {
  title: 'Components/AppSwitcher',
  component: AppSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Waffle-grid launcher that opens a floating panel with the Tempo Internal app list. ' +
          'Place it in the Header `actions` or `mobileRight` slot. ' +
          'Customize the list via the `apps` prop; each entry accepts any `icon` ReactNode.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AppSwitcher>

/** Default — three Tempo Internal apps with bundled icons. */
export const Default: Story = {}

/** Custom title. */
export const CustomTitle: Story = {
  args: { title: 'Tempo Apps' },
}

/** Two custom apps with initials fallback icons. */
export const CustomApps: Story = {
  args: {
    apps: [
      { name: 'Newsroom', href: '#', initials: 'NR' },
      { name: 'DAM', href: '#', initials: 'DA' },
      { name: 'Kodeks', href: '#', initials: 'KO' },
      { name: 'Analytics', href: '#', initials: 'AN' },
    ],
  },
}

/** Placed inside a simulated header bar — shows real-world usage context. */
export const InHeader: Story = {
  decorators: [
    (Story) => (
      <div className="flex h-12 items-center gap-2 border border-neutral-200 bg-white px-4">
        <Story />
        <span className="ml-2 text-sm font-semibold text-neutral-900">Newsroom</span>
      </div>
    ),
  ],
}
