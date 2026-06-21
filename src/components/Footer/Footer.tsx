import { cn } from '@/utils/cn'
import instagramIcon from '@/assets/images/instagram.svg?inline'
import xIcon from '@/assets/images/x-social-media-black-icon.svg?inline'
import facebookIcon from '@/assets/images/facebook-social-media-black-icon.svg?inline'
import tiktokIcon from '@/assets/images/tiktok.svg?inline'
import threadsIcon from '@/assets/images/threads.svg?inline'
import appStoreImg from '@/assets/images/appstore.png?inline'
import playStoreImg from '@/assets/images/playstore.png?inline'

const TRUST_AMSI = 'https://asset.tempo.co/sb/img/logo-trusted.webp'
const TRUST_IFCN =
  'https://cdn.ifcncodeofprinciples.poynter.org/storage/badges/B7064769-BAC4-E2CC-0F1E-F19116B82C6F.png'
const IFCN_URL = 'https://ifcncodeofprinciples.poynter.org/profile/tempo'

const MEDIA_NETWORK: { name: string; url: string }[][] = [
  [
    { name: 'Tempo.co English', url: 'https://en.tempo.co/' },
    { name: 'Tempo Magazine', url: 'https://magz.tempo.co/' },
    { name: 'Tempo Store', url: 'https://store.tempo.co/' },
    { name: 'Tempo TV', url: 'https://www.youtube.com/channel/UCpe3xgNfL52vIhV5kewEc1Q' },
    { name: 'Tempo Witness', url: 'https://witness.tempo.co/' },
  ],
  [
    { name: 'Tempo Institute', url: 'https://tempoinstitute.com/' },
    { name: 'Tempo Data Science', url: 'https://data.tempo.co/' },
    { name: 'Tempo Komunitas', url: 'https://tkomunitas.com/' },
    { name: 'Ruang dan Tempo', url: 'https://www.instagram.com/ruangdantempo/?hl=en' },
    { name: 'Telusuri', url: 'https://telusuri.id/' },
  ],
  [
    { name: 'Ziliun', url: 'https://ziliun.com/' },
    { name: 'Kok Bisa', url: 'https://www.youtube.com/channel/UCu0yQD7NFMyLu_-TmKa4Hqg' },
    { name: 'Temotion', url: 'https://www.tempo-animation.id/' },
    { name: 'Orbitin', url: 'https://orbitin.id/' },
  ],
  [
    { name: 'Teras', url: 'https://teras.id/' },
    { name: 'Indonesiana', url: 'https://www.indonesiana.id/' },
    { name: 'Cantika', url: 'https://www.cantika.com/' },
    { name: 'Gooto', url: 'https://www.gooto.com/' },
  ],
]

const INFO_COLS: { name: string; url: string }[][] = [
  [
    { name: 'Tentang Kami', url: 'https://tempo.co/tentangkami' },
    {
      name: 'Pedoman Penggunaan Konten Terhadap AI',
      url: 'https://tempo.co/pedoman_penggunaan_konten_ai',
    },
    { name: 'Ketentuan Layanan', url: 'https://tempo.co/ketentuanlayanan' },
    { name: 'Kebijakan Privasi Tempo', url: 'https://tempo.co/kebijakanprivasi' },
  ],
  [
    { name: 'Pedoman Media Siber', url: 'https://tempo.co/pedomanmediasiber' },
    {
      name: 'Kode Etik dan Pedoman Jurnalistik',
      url: 'https://tempo.co/kode-etik-dan-pedoman-jurnalistik',
    },
    { name: 'Beriklan', url: 'https://tempo.co/beriklan' },
  ],
]

const SOCIAL: { label: string; url: string; icon: string }[] = [
  { label: 'Instagram', url: 'https://www.instagram.com/tempodotco/', icon: instagramIcon },
  { label: 'X (Twitter)', url: 'https://twitter.com/tempodotco', icon: xIcon },
  { label: 'Facebook', url: 'https://www.facebook.com/TempoMedia', icon: facebookIcon },
  { label: 'TikTok', url: 'https://www.tiktok.com/@tempo.co', icon: tiktokIcon },
  { label: 'Threads', url: 'https://www.threads.net/@tempodotco', icon: threadsIcon },
]

/** Current year in Jakarta time (GMT+7) — stable across SSR and client. */
function currentYearJakarta(): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
  }).format(new Date())
}

/** Coordinated color scheme for the two footer variants. */
type FooterVariant = 'dark' | 'light'

interface FooterScheme {
  root: string
  heading: string
  link: string
  quote: string
  quoteDate: string
  divider: string
  bottom: string
  /** Extra class applied to social icons (they ship white; invert for light bg). */
  socialImg: string
}

const SCHEMES: Record<FooterVariant, FooterScheme> = {
  // Default: background var(--Neutral-1200, #212121).
  dark: {
    root: 'bg-neutral-1200 text-white/70',
    heading: 'text-white',
    link: 'text-white/70 hover:text-white',
    quote: 'text-white/70',
    quoteDate: 'text-white',
    divider: 'border-white/15',
    bottom: 'border-t border-white/10 text-white/50',
    socialImg: '',
  },
  light: {
    root: 'bg-white text-neutral-700',
    heading: 'text-neutral-900',
    link: 'text-neutral-700 hover:text-brand-primary',
    quote: 'text-neutral-700',
    quoteDate: 'text-neutral-900',
    divider: 'border-neutral-200',
    bottom: 'border-t border-neutral-200 bg-neutral-50 text-neutral-500',
    // Social icons are white; render them black on the light background.
    socialImg: 'brightness-0',
  },
}

function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <img src={TRUST_AMSI} alt="AMSI Badge" loading="lazy" className="h-12 w-auto" />
      <a href={IFCN_URL} target="_blank" rel="noopener noreferrer" title="IFCN signatory">
        <img src={TRUST_IFCN} alt="IFCN Signatory Badge" loading="lazy" className="h-12 w-auto" />
      </a>
    </div>
  )
}

function SocialRow({ imgClass }: { imgClass: string }) {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL.map((s) => (
        <a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="transition-opacity hover:opacity-70"
        >
          <img
            src={s.icon}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className={imgClass || undefined}
          />
        </a>
      ))}
    </div>
  )
}

function AppButtons() {
  return (
    <div className="flex flex-col gap-2">
      <a
        href="https://apps.apple.com/id/app/tempo/id1380254415"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={appStoreImg} alt="Download on the App Store" className="h-10 w-auto" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=co.tempo.media"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={playStoreImg} alt="Get it on Google Play" className="h-10 w-auto" />
      </a>
    </div>
  )
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Color scheme. `dark` (default) uses a #212121 background; `light` uses white.
   * For a custom background, keep a variant for contrast and override via
   * `className` (e.g. `<Footer className="bg-[#1a1a1a]" />`).
   */
  variant?: FooterVariant
}

/**
 * Desktop site footer for Tempo products.
 *
 * Contains the editorial quote, social links, app-download badges, the Tempo
 * media network, informational links, trust badges, and a copyright bar.
 * Mobile uses a separate footer component.
 */
export function Footer({ className, variant = 'dark', ...props }: FooterProps) {
  const year = currentYearJakarta()
  const scheme = SCHEMES[variant]
  const headingClass = cn('mb-3 text-sm font-bold', scheme.heading)
  const linkClass = cn('block py-1 text-sm transition-colors', scheme.link)

  return (
    <footer role="contentinfo" className={cn('w-full', scheme.root, className)} {...props}>
      <div className="mx-auto max-w-[1366px] px-10 py-10">
        {/* Top: quote · social · app downloads */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-10">
          <blockquote
            className={cn('max-w-2xl font-serif text-sm italic leading-relaxed', scheme.quote)}
          >
            Asas jurnalisme kami bukan jurnalisme yang memihak satu golongan. Kami percaya kebajikan,
            juga ketidakbajikan, tidak menjadi monopoli satu pihak. Kami percaya tugas pers bukan
            menyebarkan prasangka, justru melenyapkannya, bukan membenihkan kebencian, melainkan
            mengkomunikasikan saling pengertian. Jurnalisme kami bukan jurnalisme untuk memaki atau
            mencibirkan bibir, juga tidak dimaksudkan untuk menjilat atau menghamba ~{' '}
            <span className={cn('font-semibold not-italic', scheme.quoteDate)}>6 Maret 1971</span>
          </blockquote>

          <div>
            <p className={headingClass}>Media Sosial</p>
            <SocialRow imgClass={scheme.socialImg} />
          </div>

          <div>
            <p className={headingClass}>Unduh Aplikasi Tempo</p>
            <AppButtons />
          </div>
        </div>

        <hr className={cn('my-8', scheme.divider)} />

        {/* Mid: media network + trust · informasi */}
        <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-12">
          <div>
            <p className={headingClass}>Jaringan Media</p>
            <div className="grid grid-cols-4 gap-x-8">
              {MEDIA_NETWORK.map((col, ci) => (
                <div key={ci}>
                  {col.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className={headingClass}>Trustworthy News</p>
              <TrustBadges />
            </div>
          </div>

          <div>
            <p className={headingClass}>Informasi</p>
            <div className="grid grid-cols-2 gap-x-8">
              {INFO_COLS.map((col, ci) => (
                <div key={ci}>
                  {col.map((link) => (
                    <a key={link.name} href={link.url} className={linkClass}>
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={scheme.bottom}>
        <div className="mx-auto max-w-[1366px] px-10 py-4">
          <span className="text-sm">© {year} Tempo - Hak Cipta Dilindungi Hukum</span>
        </div>
      </div>
    </footer>
  )
}
