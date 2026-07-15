import { useState, useRef, useEffect, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import newsroomIcon from '@/assets/images/red-newsroom-icon.png?inline'
import damIcon from '@/assets/images/red-dam-icon.png?inline'

// ── Icons ──────────────────────────────────────────────────────────────────

function WaffleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" className={cn('h-[18px] w-[18px]', className)}>
      <circle cx="2" cy="2" r="2" /><circle cx="9" cy="2" r="2" /><circle cx="16" cy="2" r="2" />
      <circle cx="2" cy="9" r="2" /><circle cx="9" cy="9" r="2" /><circle cx="16" cy="9" r="2" />
      <circle cx="2" cy="16" r="2" /><circle cx="9" cy="16" r="2" /><circle cx="16" cy="16" r="2" />
    </svg>
  )
}

/** Fallback icon: red rounded square with white initials — used when no image is supplied. */
function InitialsIcon({ initials }: { initials: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-sm font-bold text-white">
      {initials}
    </span>
  )
}

// ── Types ──────────────────────────────────────────────────────────────────

export interface AppItem {
  /** Display name shown below the icon. */
  name: string
  /** URL the app link navigates to. */
  href: string
  /** Icon node (e.g. `<img>`, `<svg>`, any ReactNode). Falls back to initials when omitted. */
  icon?: ReactNode
  /** Two-letter fallback initials used when `icon` is not provided. */
  initials?: string
  /** Opens in a new tab. Defaults to `true`. */
  external?: boolean
}

export interface AppSwitcherProps {
  /** Suite title shown at the top of the panel. Defaults to "Tempo Internal". */
  title?: string
  /** Apps to list. Defaults to the three Tempo internal apps. */
  apps?: AppItem[]
  /** Extra className on the trigger button. */
  className?: string
}

// ── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_APPS: AppItem[] = [
  {
    name: 'Single Newsroom',
    href: '#',
    icon: <img src={newsroomIcon} alt="" aria-hidden="true" className="h-10 w-10 rounded-xl object-cover" />,
  },
  {
    name: 'Digital Assets Management',
    href: '#',
    icon: <img src={damIcon} alt="" aria-hidden="true" className="h-10 w-10 rounded-xl object-cover" />,
  },
  {
    name: 'Kodeks Tempo',
    href: '#',
    initials: 'KT',
  },
]

// ── Component ──────────────────────────────────────────────────────────────

/**
 * App-switcher launcher button.
 *
 * A waffle-grid button that opens a floating panel listing Tempo Internal apps.
 * Apps are fully configurable via the `apps` prop; the default list ships with
 * inlined icons for Newsroom and DAM.
 *
 * @example
 * // Custom apps
 * <AppSwitcher apps={[{ name: 'Newsroom', href: 'https://newsroom.tempo.co', icon: <img src={icon} /> }]} />
 */
export function AppSwitcher({ title = 'Tempo Internal', apps = DEFAULT_APPS, className }: AppSwitcherProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close on click-outside
  useEffect(() => {
    if (!open) return
    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Buka pemilih aplikasi"
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(
          'inline-flex items-center justify-center rounded-md p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900',
          open && 'bg-neutral-100 text-neutral-900',
          className,
        )}
      >
        <WaffleIcon />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={title}
          className="absolute left-0 top-full z-50 mt-2 w-[280px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg"
        >
          {/* Panel header */}
          <div className="border-b border-neutral-100 px-4 py-3">
            <p className="text-sm font-semibold text-neutral-900">{title}</p>
          </div>

          {/* App grid */}
          <div className="grid grid-cols-2 gap-1 p-3">
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.href}
                target={app.external !== false ? '_blank' : undefined}
                rel={app.external !== false ? 'noopener noreferrer' : undefined}
                onClick={() => setOpen(false)}
                className="flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors hover:bg-neutral-50"
              >
                {app.icon ?? <InitialsIcon initials={app.initials ?? app.name.slice(0, 2).toUpperCase()} />}
                <span className="line-clamp-2 text-xs font-medium leading-tight text-neutral-700">
                  {app.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
