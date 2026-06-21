import { TempoPlusLogo, TempoVipLogo, TerasLogo } from '@/icons/logos'
import {
  UserIcon,
  SettingsIcon,
  BookmarkIcon,
  SubscriptionIcon,
  VoucherIcon,
} from '@/icons/menu'
import type { MemberzoneSubscription, MemberzoneMenuItem, SocialLink } from './types'

/** Default Tempo subscription rows (Tempo Plus, Teras, Tempo VIP). */
export const defaultSubscriptions: MemberzoneSubscription[] = [
  {
    name: 'Tempo Plus',
    link: 'https://tempo.co/',
    icon: TempoPlusLogo,
    accessKey: 'tempo_plus',
  },
  {
    name: 'Teras',
    link: 'https://teras.id/',
    icon: TerasLogo,
    accessKey: 'teras_plus',
  },
  {
    name: 'Tempo VIP',
    link: 'https://membership.tempo.co/',
    icon: TempoVipLogo,
    isVip: true,
  },
]

/** Default account menu links. */
export const defaultMenuItems: MemberzoneMenuItem[] = [
  { key: 'user-details', label: 'Informasi Akun', href: 'https://tempo.co/users/user-details', icon: UserIcon },
  { key: 'settings', label: 'Pengaturan Akun', href: 'https://tempo.co/users/settings', icon: SettingsIcon },
  { key: 'favorite-articles', label: 'Artikel Tersimpan', href: 'https://tempo.co/users/favorite-articles', icon: BookmarkIcon },
  { key: 'subscriptions', label: 'Langganan', href: 'https://tempo.co/users/subscriptions', icon: SubscriptionIcon },
  { key: 'voucher-instant', label: 'Kupon Instan', href: 'https://tempo.co/users/voucher-instant', icon: VoucherIcon },
]

/** Default Teras social media links. */
export const defaultTerasSocials: SocialLink[] = [
  { name: 'instagram', url: 'https://instagram.com/teras_idn' },
  { name: 'x', url: 'https://x.com/teras_idn' },
  { name: 'facebook', url: 'https://facebook.com/terasdotid' },
]
