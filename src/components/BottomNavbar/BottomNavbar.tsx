import tempoPlusBottom from '@/assets/images/tempo-plus-bottom.svg?inline'
import { HomeIcon, HarianIcon, MingguanIcon } from '@/icons/navbar'
import { cn } from '@/utils/cn'

export type BottomNavItem = 'beranda' | 'harian' | 'mingguan' | 'tempo-plus'

export interface BottomNavbarProps {
  /** Currently active nav item. */
  activeItem?: BottomNavItem
  /** Called when a nav item is clicked. */
  onItemClick?: (item: BottomNavItem) => void
  className?: string
}

interface NavItemConfig {
  id: BottomNavItem
  label: string
  icon: React.ReactNode
}

const activeClass = 'text-brand-primary'
const inactiveClass = 'text-neutral-500'

export function BottomNavbar({ activeItem, onItemClick, className }: BottomNavbarProps) {
  const items: NavItemConfig[] = [
    {
      id: 'beranda',
      label: 'Beranda',
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      id: 'harian',
      label: 'Harian',
      icon: <HarianIcon className="h-5 w-5" />,
    },
    {
      id: 'mingguan',
      label: 'Mingguan',
      icon: <MingguanIcon className="h-5 w-5" />,
    },
    {
      id: 'tempo-plus',
      label: 'Tempo Plus',
      icon: <img src={tempoPlusBottom} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />,
    },
  ]

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 z-50 flex h-[52px] w-full items-center justify-between border-t border-neutral-200 bg-[#FCFCFC] px-4 py-2',
        className,
      )}
      aria-label="Navigasi utama"
    >
      {items.map(({ id, label, icon }) => {
        const isActive = activeItem === id
        return (
          <button
            key={id}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onItemClick?.(id)}
            className={cn(
              'flex h-[38px] w-[82px] cursor-pointer flex-col items-center justify-center gap-0.5 transition-colors',
              isActive ? activeClass : inactiveClass,
            )}
          >
            {icon}
            <span className="text-[10px] font-medium leading-none">{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
