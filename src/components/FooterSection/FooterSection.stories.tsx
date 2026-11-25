import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterSection } from './FooterSection'

const meta: Meta<typeof FooterSection> = {
  title: 'Components/Footer Section',
  component: FooterSection,
  tags: ['autodocs'],
  args: { baseUrl: 'https://en.tempo.co' },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'Site footer for Tempo English (en.tempo.co) on a red (`#D21820`) background. Renders the',
          'category columns (News, Knowledge, Lifestyle, Youth), social links, app-download badges,',
          'the editorial quote, information links, and a copyright line with trust badges. Rendered',
          'as a `<footer role="contentinfo">` landmark.',
          '',
          'All copy is in English. The layout is responsive: single column on mobile, 5 columns on',
          'large screens (`max-w-[1400px]` content).',
          '',
          'Social icons and app-store badges are bundled as inlined data-URIs; trust badges load from',
          'the Tempo / IFCN CDNs. The copyright year is computed in Jakarta time (GMT+7), stable',
          'across SSR and client.',
          '',
          '### Usage',
          '```tsx',
          "import { FooterSection } from '@tempomedia/antarmuka'",
          "import '@tempomedia/antarmuka/styles.css'",
          '',
          'export function SiteLayout({ children }) {',
          '  return (',
          '    <>',
          '      <main>{children}</main>',
          '      <FooterSection />',
          '    </>',
          '  )',
          '}',
          '```',
          '',
          'Internal links (About Us, Privacy Policy, ...) are relative by default (`/about-us`), so',
          'they resolve against the host app (localhost, staging, production). Set `baseUrl` to',
          'prefix them, e.g. `baseUrl="https://en.tempo.co"`. These stories use',
          '`https://en.tempo.co` so the links work inside Storybook.',
          '',
          'Accepts any standard `<footer>` HTML attributes; pass `className` to add spacing or',
          'override styles (e.g. `<FooterSection className="mt-16" />`).',
        ].join('\n'),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FooterSection>

/** Default footer. */
export const Default: Story = {}

/** Custom background via className. */
export const CustomBackground: Story = {
  args: { className: 'bg-[#0b1f3a]' },
}

/** Relative internal links (`/about-us`): the component's default outside Storybook. */
export const RelativeLinks: Story = {
  args: { baseUrl: '' },
}
