import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { MenuSearchIcon, UserCircleIcon } from '@/icons/header'

/** Default placeholder logo. Replace via the `logo` prop. */
function DefaultLogo() {
  return (
    <span className="flex h-8 items-center gap-2 text-2xl font-bold leading-none tracking-tight text-brand-primary">
      Tempo
    </span>
  )
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand logo — left on desktop, centered on mobile. Defaults to a Tempo placeholder. */
  logo?: ReactNode
  /** Desktop navigation content rendered in the center of the bar. */
  children?: ReactNode
  /** Desktop right-aligned content, e.g. the primary call-to-action button(s). */
  actions?: ReactNode
  /** Pin the header to the top of the viewport (Scroll Position: Fixed). Default true. */
  fixed?: boolean
  /** Mobile: click handler for the left menu / search button. */
  onMenuClick?: () => void
  /** Mobile: click handler for the right user / login button. */
  onUserClick?: () => void
  /** Mobile: accessible label for the menu button. */
  menuLabel?: string
  /** Mobile: accessible label for the user button. */
  userLabel?: string
  /** Desktop: click handler for the user / account icon shown before `actions`. */
  onDesktopUserClick?: () => void
  /** Desktop: accessible label for the desktop user icon button. Default 'Akun'. */
  desktopUserLabel?: string
}

/**
 * Responsive site header / top navigation bar.
 *
 * - **Mobile** (`< md`): 49px tall — logo on the left, user/login + menu/search
 *   buttons grouped on the right; 1px bottom border (#EEEEEE), 8px/24px padding.
 * - **Desktop** (`>= md`): 64px tall — logo, optional centered nav, right-aligned
 *   actions; 1px bottom border (#E0E0E0), content capped at 1366px.
 *
 * Fixed to the top of the viewport by default.
 */
export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      logo,
      children,
      actions,
      fixed = true,
      onMenuClick,
      onUserClick,
      menuLabel = 'Menu dan pencarian',
      userLabel = 'Masuk',
      onDesktopUserClick,
      desktopUserLabel = 'Akun',
      ...props
    },
    ref,
  ) => {
    const logoNode = logo ?? <DefaultLogo />

    return (
      <header
        ref={ref}
        className={cn(
          'left-0 right-0 top-0 z-40 h-[49px] w-full border-b border-neutral-200 bg-white md:h-16 md:border-neutral-600',
          fixed ? 'fixed' : 'relative',
          className,
        )}
        {...props}
      >
        {/* Mobile bar: logo left, user + menu icons on the right */}
        <div className="flex h-full items-center justify-between px-6 py-2 md:hidden">
          <div className="flex h-8 items-center">{logoNode}</div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onUserClick}
              aria-label={userLabel}
              className="inline-flex cursor-pointer items-center text-neutral-900 transition-opacity hover:opacity-70"
            >
              <UserCircleIcon className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={onMenuClick}
              aria-label={menuLabel}
              className="inline-flex cursor-pointer items-center text-neutral-900 transition-opacity hover:opacity-70"
            >
              <MenuSearchIcon className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Desktop bar */}
        <div className="mx-auto hidden h-full max-w-[1366px] items-center justify-between gap-6 px-34 md:flex">
          <div className="flex h-8 shrink-0 items-center gap-2">{logoNode}</div>
          {children && (
            <nav className="flex flex-1 items-center justify-center gap-6">{children}</nav>
          )}
          {(onDesktopUserClick || actions) && (
            <div className="flex h-8 shrink-0 items-center gap-4">
              {onDesktopUserClick && (
                <button
                  type="button"
                  onClick={onDesktopUserClick}
                  aria-label={desktopUserLabel}
                  className="inline-flex cursor-pointer items-center text-neutral-900 transition-opacity hover:opacity-70"
                >
                  <UserCircleIcon className="h-7 w-7" />
                </button>
              )}
              {actions}
            </div>
          )}
        </div>
      </header>
    )
  },
)

Header.displayName = 'Header'
