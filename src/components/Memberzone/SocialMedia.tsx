import { socialIcons, type SocialIconName } from '@/icons/social'
import { defaultTerasSocials } from './defaults'
import type { SocialLink } from './types'

export interface SocialMediaProps {
  /** Heading shown above the icons. */
  title?: string
  /** Social links to render. Defaults to the Teras set. */
  links?: SocialLink[]
}

/** Row of social media icons (used in the Teras Memberzone template). */
export function SocialMedia({ title = 'Ikuti Sosial Media Kami', links = defaultTerasSocials }: SocialMediaProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-neutral-900">{title}</p>
      <div className="mt-4 flex items-center gap-3">
        {links.map((item) => {
          const Icon = socialIcons[item.name.toLowerCase() as SocialIconName]
          return (
            <a
              key={item.name}
              href={item.url}
              className="transition hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              {Icon ? <Icon className="h-8 w-8" /> : item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
