import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'
import { SearchTabs } from './SearchTabs'
import { SearchSummary } from './SearchSummary'

const meta: Meta = {
  title: 'Components/SearchMenu',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

/** Controlled search input with submit + clear. */
export const Input: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState('pemilu')
      const [submitted, setSubmitted] = useState('pemilu')
      return (
        <div className="space-y-3">
          <SearchInput
            value={value}
            onValueChange={setValue}
            onSubmit={setSubmitted}
            onClear={() => setSubmitted('')}
          />
          <p className="text-sm text-neutral-700">
            Submitted query: <span className="font-medium">&quot;{submitted}&quot;</span>
          </p>
        </div>
      )
    }
    return <Demo />
  },
}

/** Tab bar with a button-driven active tab. */
export const Tabs: Story = {
  render: () => {
    const Demo = () => {
      const [active, setActive] = useState('search')
      return (
        <SearchTabs
          activeValue={active}
          onTabChange={setActive}
          tabs={[
            { label: 'Artikel', value: 'search' },
            { label: 'Mingguan', value: 'mingguan' },
          ]}
        />
      )
    }
    return <Demo />
  },
}

/** Tab bar rendered as links (router-free). */
export const TabsAsLinks: Story = {
  render: () => (
    <SearchTabs
      activeValue="search"
      tabs={[
        { label: 'Artikel', value: 'search', href: '/search?q=pemilu' },
        { label: 'Mingguan', value: 'mingguan', href: '/search/mingguan?q=pemilu' },
      ]}
    />
  ),
}

/** Result summary heading. */
export const Summary: Story = {
  render: () => <SearchSummary category="ARTIKEL" count={128} query="pemilu" />,
}

/** The three pieces composed together. */
export const Composed: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState('pemilu')
      const [active, setActive] = useState('search')
      return (
        <div className="max-w-xl space-y-4">
          <SearchInput value={value} onValueChange={setValue} />
          <SearchTabs
            activeValue={active}
            onTabChange={setActive}
            tabs={[
              { label: 'Artikel', value: 'search' },
              { label: 'Mingguan', value: 'mingguan' },
            ]}
          />
          <SearchSummary category="ARTIKEL" count={128} query={value} />
        </div>
      )
    }
    return <Demo />
  },
}
