import { Memberzone, type MemberzoneSide } from './Memberzone'
import { MemberzoneSection } from './MemberzoneSection'
import { Avatar } from '../Avatar'
import { cn } from '@/utils/cn'
import type {
  MemberzoneUser,
  MemberzoneTemplate,
  MemberzoneSubscription,
  MemberzoneMenuItem,
  SocialLink,
} from './types'

export interface MemberzonePanelProps {
  user: MemberzoneUser
  templateFor: MemberzoneTemplate
  ssoUrl: string
  /** Side the drawer slides in from. Defaults to "right". */
  side?: Extract<MemberzoneSide, 'left' | 'right'>
  subscriptions?: MemberzoneSubscription[]
  menuItems?: MemberzoneMenuItem[]
  socialLinks?: SocialLink[]
  /** Active path for menu highlighting. Defaults to window.location.pathname. */
  currentPath?: string
  /** Called when the user activates "Keluar" (logout). */
  onLogout?: () => void
  /** Controlled open state (optional). */
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Title shown in the drawer header. */
  title?: string
  className?: string
}

/**
 * Tempo member account drawer: an avatar trigger that opens a slide-in panel
 * with the user's info, subscription status, account menus, and (for Teras)
 * social links. Framework-agnostic — no router dependency.
 */
export function MemberzonePanel({
  user,
  templateFor,
  ssoUrl,
  side = 'right',
  subscriptions,
  menuItems,
  socialLinks,
  currentPath,
  onLogout,
  open,
  defaultOpen,
  onOpenChange,
  title = 'Akun',
  className,
}: MemberzonePanelProps) {
  return (
    <Memberzone.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <Memberzone.Trigger asChild>
        <button type="button" className="cursor-pointer text-black" aria-label="Buka menu akun">
          <Avatar size="sm" bordered initials={user.firstLetterOfName} alt={user.fullname} />
        </button>
      </Memberzone.Trigger>
      <Memberzone.Content side={side} className={cn('flex w-full flex-col bg-neutral-100 p-0', className)}>
        <Memberzone.Header className="flex-none">
          <Memberzone.Title className="border-b border-neutral-200 bg-white py-3 text-center text-xl font-semibold">
            {title}
          </Memberzone.Title>
          <Memberzone.Description className="hidden">Menu akun pengguna</Memberzone.Description>
        </Memberzone.Header>
        <MemberzoneSection
          user={user}
          templateFor={templateFor}
          ssoUrl={ssoUrl}
          subscriptions={subscriptions}
          menuItems={menuItems}
          socialLinks={socialLinks}
          currentPath={currentPath}
          onLogout={onLogout}
          className="flex-1 overflow-y-auto"
        />
      </Memberzone.Content>
    </Memberzone.Root>
  )
}
