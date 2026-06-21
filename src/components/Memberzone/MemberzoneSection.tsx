import { useMemo } from 'react'
import { cn } from '@/utils/cn'
import { Avatar } from '../Avatar'
import { Badge } from '../Badge'
import { buttonVariants } from '../Button'
import { MemberzoneMenus } from './MemberzoneMenus'
import { SocialMedia } from './SocialMedia'
import { defaultSubscriptions } from './defaults'
import type {
  MemberzoneUser,
  MemberzoneTemplate,
  MemberzoneSubscription,
  MemberzoneMenuItem,
  SocialLink,
} from './types'

const SUBSCRIPTION_DETAIL_URL = 'https://tempo.co/users/subscriptions'

function orderSubscriptions(
  subscriptions: MemberzoneSubscription[],
  templateFor: MemberzoneTemplate,
): MemberzoneSubscription[] {
  const ordered = [...subscriptions]
  if (templateFor === 'teras') {
    const idx = ordered.findIndex((s) => s.name === 'Teras')
    if (idx > -1) {
      const [teras] = ordered.splice(idx, 1)
      ordered.unshift(teras)
    }
  } else if (templateFor === 'tempo') {
    const order = ['Tempo Plus', 'Teras', 'Tempo VIP']
    ordered.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name))
  }
  return ordered
}

function isSubscriptionActive(subscription: MemberzoneSubscription, user: MemberzoneUser): boolean {
  if (subscription.isVip) return Boolean(user.vipSubscription)
  if (!subscription.accessKey) return false
  return Boolean(user.contentAccess?.includes(subscription.accessKey))
}

export interface MemberzoneSectionProps {
  user: MemberzoneUser
  templateFor: MemberzoneTemplate
  ssoUrl: string
  /** When true, renders compact (no subscription panel) — e.g. inline sidebar usage. */
  isSidebar?: boolean
  subscriptions?: MemberzoneSubscription[]
  menuItems?: MemberzoneMenuItem[]
  socialLinks?: SocialLink[]
  /** Active path for menu highlighting. Defaults to window.location.pathname. */
  currentPath?: string
  /** Called when the user activates "Keluar" (logout). */
  onLogout?: () => void
  className?: string
}

/** User info + subscription status + account menus. The body of the Memberzone drawer. */
export function MemberzoneSection({
  user,
  templateFor,
  ssoUrl,
  isSidebar = false,
  subscriptions = defaultSubscriptions,
  menuItems,
  socialLinks,
  currentPath,
  onLogout,
  className,
}: MemberzoneSectionProps) {
  const ordered = useMemo(
    () => orderSubscriptions(subscriptions, templateFor),
    [subscriptions, templateFor],
  )

  return (
    <div className={cn(isSidebar && 'max-h-[90dvh] w-full overflow-y-auto pb-20 lg:pb-0', className)}>
      <div className="flex gap-3 overflow-hidden px-6 py-4">
        <Avatar size="lg" initials={user.initial} alt={user.fullname} />
        <div>
          <p className="mb-1 line-clamp-1 text-lg font-semibold leading-6 text-neutral-900">
            {user.fullname}
          </p>
          <p className="mb-1 line-clamp-1 text-sm font-semibold leading-4 text-neutral-500 lg:min-w-52">
            {user.email}
          </p>
          <p className="text-sm font-normal leading-4 text-neutral-500">Tempo ID : {user.id}</p>
        </div>
      </div>

      {!isSidebar && (
        <div className="px-5">
          <p className="mb-4 text-lg font-bold">Status Langganan</p>
          <div className="rounded-xl bg-white p-5">
            {ordered.map((subscription) => {
              const active = isSubscriptionActive(subscription, user)
              const Icon = subscription.icon
              return (
                <div
                  key={subscription.name}
                  className="mb-4 flex items-center gap-3 border-b border-neutral-200 pb-4"
                >
                  <Icon className="mt-1 h-[19px] w-[19px]" aria-hidden="true" />
                  <a
                    href={subscription.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-900 underline"
                  >
                    {subscription.name}
                  </a>
                  <Badge variant={active ? 'success' : 'danger'} className="ms-auto">
                    {active ? 'Aktif' : 'Tidak Aktif'}
                  </Badge>
                </div>
              )
            })}

            <a
              href={SUBSCRIPTION_DETAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), 'mt-4 w-full')}
            >
              Lihat Detail Langganan
            </a>
          </div>
        </div>
      )}

      <MemberzoneMenus
        templateFor={templateFor}
        isSidebar={isSidebar}
        ssoUrl={ssoUrl}
        menuItems={menuItems}
        currentPath={currentPath}
        onLogout={onLogout}
      />

      {templateFor === 'teras' && (
        <div className="mt-4 px-5">
          <SocialMedia links={socialLinks} />
        </div>
      )}
    </div>
  )
}
