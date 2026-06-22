import type { Meta, StoryObj } from '@storybook/react-vite'
import { Crown } from 'lucide-react'
import { Header } from './Header'
import { ActionButton } from '../ActionButton'
import { UserCircleIcon, MenuSearchIcon } from '@/icons/header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Responsive top navigation bar. All slots are optional — compose only what each app needs.\n\n' +
          '**Mobile** (`< md`, 49px): `mobileLeft` (falls back to `logo`) · `mobileRight` (any nodes).\n\n' +
          '**Desktop** (`>= md`, 64px): `logo` · `children` (center nav) · `actions` (right).',
      },
    },
  },
  argTypes: {
    fixed: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Header>

const mobileWrap: Story['decorators'] = [
  (Story) => (
    <div className="w-[390px] border border-neutral-200">
      <Story />
    </div>
  ),
]

const iconBtn =
  'inline-flex cursor-pointer items-center text-neutral-900 transition-opacity hover:opacity-70'

// ── Desktop stories ────────────────────────────────────────────────────────

/**
 * Standard desktop header: logo · user icon · Langganan button.
 * View at md+ width.
 */
export const Default: Story = {
  args: {
    fixed: false,
    actions: (
      <>
        <button type="button" aria-label="Akun" className={iconBtn}>
          <UserCircleIcon className="h-7 w-7" />
        </button>
        <ActionButton variant="primary" styleType="fill" size="small" className="w-[141px]">
          Langganan
        </ActionButton>
      </>
    ),
  },
}

/** Desktop with navigation links in the center slot. */
export const WithNavigation: Story = {
  args: {
    fixed: false,
    children: (
      <>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">Nasional</a>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">Dunia</a>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">Ekonomi</a>
        <a href="#" className="text-sm font-semibold text-neutral-900 hover:text-brand-primary">Olahraga</a>
      </>
    ),
    actions: (
      <>
        <ActionButton
          variant="secondary"
          styleType="outline"
          showIconLeft
          iconLeft={<UserCircleIcon className="h-4 w-4" />}
        >
          Masuk
        </ActionButton>
        <ActionButton
          variant="primary"
          styleType="fill"
          showIconLeft
          iconLeft={<Crown className="h-4 w-4" />}
        >
          Langganan
        </ActionButton>
      </>
    ),
  },
}

// ── Mobile stories ─────────────────────────────────────────────────────────

/**
 * Mobile — standard layout: logo left · user icon + menu/search icon right.
 * Apps compose the icon buttons themselves and wire up their own handlers.
 */
export const MobileDefault: Story = {
  args: {
    fixed: false,
    mobileRight: (
      <>
        <button type="button" aria-label="Masuk" className={iconBtn}>
          <UserCircleIcon className="h-7 w-7" />
        </button>
        <button type="button" aria-label="Menu dan pencarian" className={iconBtn}>
          <MenuSearchIcon className="h-7 w-7" />
        </button>
      </>
    ),
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  decorators: mobileWrap,
}

/**
 * Mobile — action layout: Langganan button left · user icon right.
 * Used for subscription / play headers that have no sidebar (no menu icon).
 */
export const MobileAction: Story = {
  args: {
    fixed: false,
    mobileLeft: (
      <ActionButton variant="primary" styleType="fill" size="small">
        Langganan
      </ActionButton>
    ),
    mobileRight: (
      <button type="button" aria-label="Masuk" className={iconBtn}>
        <UserCircleIcon className="h-7 w-7" />
      </button>
    ),
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  decorators: mobileWrap,
}

/**
 * Mobile — logo only, no right-side buttons.
 * Minimal header for authenticated or standalone pages.
 */
export const MobileLogoOnly: Story = {
  args: { fixed: false },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  decorators: mobileWrap,
}
