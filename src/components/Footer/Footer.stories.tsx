import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['dark', 'light'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'Desktop site footer for Tempo products. Renders the editorial quote, social links,',
          'app-download badges, the Tempo media network, informational links, trust badges, and a',
          'copyright bar. Rendered as a `<footer role="contentinfo">` landmark.',
          '',
          '**Desktop only** — mobile uses a separate footer component. This layout assumes wide',
          'viewports (fixed 4-column media network / 2-column info grids, `max-w-[1366px]` content).',
          '',
          'All imagery is self-contained: social icons and app-store badges are bundled as inlined',
          'data-URIs, and trust badges load from the Tempo / IFCN CDNs. The copyright year is computed',
          'in Jakarta time (GMT+7), stable across SSR and client.',
          '',
          '### Color',
          'Defaults to the `dark` scheme (background `#212121`). Use `variant="light"` for a white',
          'footer, or override the background with `className` while keeping a variant for text',
          'contrast — e.g. `<Footer className="bg-[#1a1a1a]" />`.',
          '',
          '### Usage',
          '```tsx',
          "import { Footer } from '@tempo/antarmuka'",
          "import '@tempo/antarmuka/styles.css'",
          '',
          'export function SiteLayout({ children }) {',
          '  return (',
          '    <>',
          '      <main>{children}</main>',
          '      <Footer />',
          '    </>',
          '  )',
          '}',
          '```',
          '',
          'Accepts any standard `<footer>` HTML attributes; pass `className` to add spacing or',
          'override styles (e.g. `<Footer className="mt-16" />`).',
        ].join('\n'),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

/** Default dark footer (background #212121). */
export const Desktop: Story = { args: { variant: 'dark' } }

/** Light variant — white background with dark text and inverted social icons. */
export const Light: Story = { args: { variant: 'light' } }

/** Custom background via className (variant kept for text contrast). */
export const CustomBackground: Story = {
  args: { variant: 'dark', className: 'bg-[#0b1f3a]' },
}
