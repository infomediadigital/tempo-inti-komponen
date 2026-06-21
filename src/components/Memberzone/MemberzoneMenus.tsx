import { useMemo } from 'react'
import { cn } from '@/utils/cn'
import { HeadsetIcon, LogoutIcon } from '@/icons/menu'
import { defaultMenuItems } from './defaults'
import type { MemberzoneTemplate, MemberzoneMenuItem } from './types'

export interface MemberzoneMenusProps {
  templateFor: MemberzoneTemplate
  ssoUrl: string
  isSidebar?: boolean
  menuItems?: MemberzoneMenuItem[]
  /** Active path for highlighting. Defaults to window.location.pathname. */
  currentPath?: string
  /** Called when the user activates "Keluar". If omitted, an SSO logout link is used. */
  onLogout?: () => void
}

function normalize(path: string) {
  return path.replace('https://tempo.co', '')
}

const menuLinkClass =
  'flex flex-row items-center gap-2 border-b border-neutral-200 py-2.5 text-base font-normal text-neutral-900 transition-colors'

/** Account menu links + customer help + logout. Router-free (uses currentPath). */
export function MemberzoneMenus({
  templateFor,
  ssoUrl,
  isSidebar = false,
  menuItems = defaultMenuItems,
  currentPath,
  onLogout,
}: MemberzoneMenusProps) {
  const activePath = useMemo(() => {
    if (currentPath != null) return currentPath
    if (typeof window !== 'undefined') return window.location.pathname
    return ''
  }, [currentPath])

  const items = useMemo(
    () => menuItems.filter((item) => !(templateFor === 'teras' && item.key === 'favorite-articles')),
    [menuItems, templateFor],
  )

  const helpHref = templateFor === 'teras' ? 'mailto:cs@teras.id' : 'https://wa.me/628118287002'

  const logoutHref =
    typeof window !== 'undefined'
      ? `${ssoUrl}/sso/sso/logout?ref=${window.location.origin + activePath}`
      : `${ssoUrl}/sso/sso/logout`

  return (
    <div className={cn('mt-6 px-6', isSidebar && 'px-0')}>
      {items.map((item) => {
        const active = normalize(item.href) === activePath
        const Icon = item.icon
        return (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              menuLinkClass,
              isSidebar && 'px-6',
              active ? 'font-bold text-brand-primary' : 'hover:text-brand-primary',
            )}
          >
            <Icon className="mr-2 mt-[2px]" aria-hidden="true" />
            <span>{item.label}</span>
          </a>
        )
      })}

      <a
        href={helpHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(menuLinkClass, 'hover:text-brand-primary', isSidebar && 'border-neutral-900 px-6')}
      >
        <HeadsetIcon className="mr-2 mt-[2px]" aria-hidden="true" />
        <span>Bantuan Pelanggan</span>
      </a>

      {onLogout ? (
        <button
          type="button"
          onClick={onLogout}
          className={cn(menuLinkClass, 'w-full cursor-pointer text-left hover:text-brand-primary', isSidebar && 'px-6')}
        >
          <LogoutIcon className="mr-2 mt-[2px] text-neutral-700" aria-hidden="true" />
          <span>Keluar</span>
        </button>
      ) : (
        <a
          href={logoutHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(menuLinkClass, 'cursor-pointer hover:text-brand-primary', isSidebar && 'px-6')}
        >
          <LogoutIcon className="mr-2 mt-[2px] text-neutral-700" aria-hidden="true" />
          <span>Keluar</span>
        </a>
      )}
    </div>
  )
}
