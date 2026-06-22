import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

/** Default placeholder logo. Replace via the `logo` prop. */
function DefaultLogo() {
  return (
    <span className="flex h-8 items-center gap-2 text-2xl font-bold leading-none tracking-tight text-brand-primary">
      Tempo
    </span>
  )
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Brand logo. Appears on desktop (left) and as the mobile left fallback
   * when `mobileLeft` is not provided.
   */
  logo?: ReactNode

  /**
   * Mobile bar **left** slot. When omitted the `logo` is shown instead.
   * Use this to place an action button (e.g. "Langganan") on the left for
   * subscription/play headers.
   */
  mobileLeft?: ReactNode

  /**
   * Mobile bar **right** slot. Fully optional — compose any combination of
   * icon buttons (user, menu/search, etc.) from outside.
   * When omitted the right side is empty.
   */
  mobileRight?: ReactNode

  /** Desktop center nav — links, tabs, etc. */
  children?: ReactNode

  /**
   * Desktop **right** slot — action buttons, user icon, etc.
   * When omitted the right side is empty.
   */
  actions?: ReactNode

  /** Pin the header to the top of the viewport. Default `true`. */
  fixed?: boolean
}

/**
 * Responsive site header / top navigation bar.
 *
 * **Mobile** (`< md`, 49px): fully slot-based.
 * - `mobileLeft` — left slot (falls back to `logo`).
 * - `mobileRight` — right slot (any icon buttons; omit to hide).
 *
 * **Desktop** (`>= md`, 64px): logo · optional center `children` · optional `actions`.
 * Content capped at 1366px, fixed to top by default.
 *
 * All slots are optional — pass only what the app needs.
 */
export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      logo,
      mobileLeft,
      mobileRight,
      children,
      actions,
      fixed = true,
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
        {/* ── Mobile bar ──────────────────────────────────────── */}
        <div className="flex h-full items-center justify-between px-6 py-2 md:hidden">
          <div className="flex h-8 items-center">
            {mobileLeft ?? logoNode}
          </div>
          {mobileRight && (
            <div className="flex items-center gap-4">{mobileRight}</div>
          )}
        </div>

        {/* ── Desktop bar ─────────────────────────────────────── */}
        <div className="mx-auto hidden h-full max-w-[1366px] items-center justify-between gap-6 px-34 md:flex">
          <div className="flex h-8 shrink-0 items-center gap-2">{logoNode}</div>
          {children && (
            <nav className="flex flex-1 items-center justify-center gap-6">{children}</nav>
          )}
          {actions && (
            <div className="flex h-8 shrink-0 items-center gap-4">{actions}</div>
          )}
        </div>
      </header>
    )
  },
)

Header.displayName = 'Header'
