import type { ComponentType, SVGProps } from 'react'

/** Which product the Memberzone is being rendered for. Controls ordering/menu rules. */
export type MemberzoneTemplate = 'tempo' | 'teras'

/** Minimal user shape required to render the Memberzone panel. */
export interface MemberzoneUser {
  id: number | string
  fullname: string
  email: string
  /** Initials shown in the large avatar (e.g. "An"). */
  initial: string
  /** Single letter shown in the small trigger avatar (e.g. "A"). */
  firstLetterOfName: string
  /** Whether the VIP subscription is active. */
  vipSubscription?: boolean
  /** Content access keys, e.g. ["tempo_plus", "teras_plus"]. */
  contentAccess?: string[]
}

/** A subscription row in the status panel. */
export interface MemberzoneSubscription {
  name: string
  link: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  /** content_access key used to determine active status (omitted for VIP). */
  accessKey?: string
  /** Set to true to treat this row as the VIP subscription. */
  isVip?: boolean
}

/** An account menu link. */
export interface MemberzoneMenuItem {
  key: string
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

/** A social media link rendered in the Teras template. */
export interface SocialLink {
  name: string
  url: string
}
