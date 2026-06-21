import type { Meta, StoryObj } from '@storybook/react'
import { MemberzonePanel } from './MemberzonePanel'
import type { MemberzoneUser } from './types'

const dummyUser: MemberzoneUser = {
  id: 9896432,
  email: 'anjar@tempo.co',
  fullname: 'Anjar Pratama',
  initial: 'An',
  firstLetterOfName: 'A',
  vipSubscription: false,
  contentAccess: ['tempo_plus', 'teras_plus'],
}

const meta: Meta<typeof MemberzonePanel> = {
  title: 'Features/Memberzone',
  component: MemberzonePanel,
  parameters: { layout: 'centered' },
  args: {
    user: dummyUser,
    ssoUrl: 'https://sso.tempo.co',
  },
  argTypes: {
    templateFor: { control: 'inline-radio', options: ['tempo', 'teras'] },
    side: { control: 'inline-radio', options: ['left', 'right'] },
  },
}

export default meta
type Story = StoryObj<typeof MemberzonePanel>

export const Tempo: Story = { args: { templateFor: 'tempo', side: 'right' } }
export const Teras: Story = { args: { templateFor: 'teras', side: 'right' } }
export const VipActive: Story = {
  args: {
    templateFor: 'tempo',
    user: { ...dummyUser, vipSubscription: true },
  },
}
export const OpenByDefault: Story = {
  args: { templateFor: 'tempo', defaultOpen: true },
}
