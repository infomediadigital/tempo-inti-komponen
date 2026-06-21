import { cn } from '@/utils/cn'

export interface SearchTab {
  label: string
  /** Unique identifier; compared against `activeValue` to mark the active tab. */
  value: string
  /** Optional link target. When set the tab renders as an `<a>`; otherwise a `<button>`. */
  href?: string
}

export interface SearchTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: SearchTab[]
  /** The `value` of the currently active tab. */
  activeValue: string
  /** Called with the tab `value` when a button-mode tab is clicked. */
  onTabChange?: (value: string) => void
}

/**
 * Tab bar for the search menu (e.g. Artikel / Mingguan).
 *
 * Router-free: provide `href` for link tabs, or omit it and handle `onTabChange`
 * for button tabs. The active tab is highlighted with the brand underline.
 */
export function SearchTabs({ tabs, activeValue, onTabChange, className, ...props }: SearchTabsProps) {
  return (
    <div className={cn('h-11 w-full bg-white', className)} {...props}>
      <div className="flex h-full w-full border-b border-neutral-200" role="tablist">
        {tabs.map((tab) => {
          const active = tab.value === activeValue
          const tabClass = cn(
            'flex flex-1 items-center justify-center py-2 text-center text-sm transition-colors',
            active
              ? 'border-b-2 border-brand-primary font-semibold text-brand-primary'
              : 'text-neutral-900 hover:text-brand-primary',
          )

          return tab.href ? (
            <a
              key={tab.value}
              href={tab.href}
              role="tab"
              aria-selected={active}
              className={tabClass}
            >
              {tab.label}
            </a>
          ) : (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onTabChange?.(tab.value)}
              className={tabClass}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
