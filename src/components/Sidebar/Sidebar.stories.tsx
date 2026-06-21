import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronDown, ChevronRight } from 'lucide-react'
import jaringanLogo from '@/assets/images/jaringan-logo.svg?inline'
import { Sidebar } from './Sidebar'
import { SearchInput } from '../SearchMenu'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../Accordion'

const meta: Meta = {
  title: 'Components/Sidebar',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

const kanal = [
  { text: 'Nasional', url: '#', children: ['Hukum', 'Politik', 'Nasional'] },
  { text: 'Dunia', url: '#', children: ['Asia', 'Amerika', 'Eropa'] },
  { text: 'Ekonomi', url: '#' },
  { text: 'Olahraga', url: '#' },
]

const network = [
  { id: 1, title: 'Teras', url: '#' },
  { id: 2, title: 'Cantika', url: '#' },
  { id: 3, title: 'Gooto', url: '#' },
]

const linkClass =
  'flex items-center justify-between border-b border-neutral-200 py-4 text-base font-medium text-neutral-900 hover:text-brand-primary'

/**
 * The Tempo navigation sidebar recomposed from library primitives: `Sidebar`
 * (drawer) + `SearchInput` + `Accordion`, with menu data passed as props.
 * Replaces the Nuxt `LayoutBaseSidebar` (Algolia search, runtime menu store,
 * and product widgets stay in the app).
 */
export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [query, setQuery] = useState('')
      return (
        <Sidebar.Root defaultOpen>
          <Sidebar.Trigger className="rounded-sm border border-neutral-200 px-4 py-2 text-sm">
            Buka Menu
          </Sidebar.Trigger>
          <Sidebar.Content side="left">
            <Sidebar.Header>
              <Sidebar.Title>Menu</Sidebar.Title>
              <Sidebar.Description className="sr-only">Menu navigasi</Sidebar.Description>
            </Sidebar.Header>
            <Sidebar.Body>
              <div className="px-6 py-6">
                <SearchInput
                  value={query}
                  onValueChange={setQuery}
                  onSubmit={(q) => console.log('search:', q)}
                />
              </div>

              {/* Divider between Search and Multimedia */}
              <div className="h-px w-full bg-neutral-500" />

              {/* Multimedia + Kanal: white bg, dark bottom border */}
              <div className="border-b border-neutral-900 bg-white">
                <Accordion type="single" collapsible defaultValue="multimedia">
                  <AccordionItem value="multimedia">
                    <AccordionTrigger className="border-b border-neutral-200 px-6 text-lg font-bold leading-none">
                      Multimedia
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col pb-0">
                      {['Foto', 'Video', 'Infografik', 'Podcast'].map((m) => (
                        <a
                          key={m}
                          href="#"
                          className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 text-base font-medium leading-none text-neutral-700 hover:text-brand-primary last:border-neutral-500"
                        >
                          {m}
                        </a>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="px-6">
                  <div className="flex h-12 w-full items-center gap-[10px] border-b border-neutral-200">
                    <span className="text-lg font-bold leading-none text-neutral-900">Kanal</span>
                  </div>
                  <Accordion type="multiple">
                    {kanal.map((m) =>
                      m.children ? (
                        <AccordionItem key={m.text} value={m.text} className="group">
                          <AccordionTrigger hideChevron className="font-medium">
                            <span>{m.text}</span>
                            <span className="flex h-6 w-6 items-center justify-center rounded-[1px] bg-neutral-200">
                              <ChevronDown className="h-4 w-4 text-neutral-700 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="flex flex-col">
                            {m.children.map((c) => (
                              <a key={c} href={m.url} className={`${linkClass} pl-3`}>
                                {c}
                              </a>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <a key={m.text} href={m.url} className={linkClass}>
                          {m.text}
                        </a>
                      ),
                    )}
                  </Accordion>
                </div>
              </div>

              <div className="px-6 pb-16">
                <div className="flex items-center gap-1 py-3">
                  <p className="text-lg font-bold leading-none text-neutral-900">Jaringan</p>
                  <img src={jaringanLogo} alt="Tempo Media Group" className="h-4" />
                </div>
                {network.map((n) => (
                  <a key={n.id} href={n.url} className={linkClass}>
                    <span>{n.title}</span>
                    <ChevronRight className="h-5 w-5 text-neutral-700" />
                  </a>
                ))}
              </div>
            </Sidebar.Body>
          </Sidebar.Content>
        </Sidebar.Root>
      )
    }
    return <Demo />
  },
}
