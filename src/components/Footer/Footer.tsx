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

function currentYearJakarta(): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
  }).format(new Date())
}

type FooterVariant = 'dark' | 'light'

interface FooterScheme {
  root: string
  heading: string
  link: string
  quote: string
  quoteDate: string
  divider: string
  bottom: string
  socialImg: string
}

const SCHEMES: Record<FooterVariant, FooterScheme> = {
  dark: {
    root: 'bg-[#212121] text-white',
    heading: 'text-white',
    link: 'text-white hover:underline',
    quote: 'text-white',
    quoteDate: 'text-white',
    divider: 'border-[#424242]',
    bottom: 'border-t border-[#424242] text-white',
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
    socialImg: 'brightness-0',
  },
}

function TrustBadges({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {/* AMSI badge: 57px tall per spec */}
      <img src={TRUST_AMSI} alt="AMSI Badge" loading="lazy" className="h-[57px] w-auto" />
      <a href={IFCN_URL} target="_blank" rel="noopener noreferrer" title="IFCN signatory">
        {/* IFCN badge: 48px tall per spec */}
        <img src={TRUST_IFCN} alt="IFCN Signatory Badge" loading="lazy" className="h-12 w-auto" />
      </a>
    </div>
  )
}

function SocialIcons({ imgClass }: { imgClass?: string }) {
  return (
    // Mobile: single row, centered, no wrap.
    // Desktop: wraps inside 122px column (2 rows of 3+2 icons at 32px + 13px gap).
    <div className="flex flex-nowrap justify-center gap-[13px] md:w-[122px] md:flex-wrap md:justify-start">
      {SOCIAL.map((s) => (
        <a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="inline-flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-75"
        >
          <img
            src={s.icon}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            className={cn('block h-8 w-8', imgClass)}
          />
        </a>
      ))}
    </div>
  )
}

function AppButtons() {
  return (
    // Mobile: side-by-side, centered. Desktop: stacked column.
    <div className="flex flex-row justify-center gap-3 md:flex-col md:justify-start">
      <a
        href="https://apps.apple.com/id/app/tempo/id1380254415"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block leading-none"
      >
        <img src={appStoreImg} alt="Download on the App Store" className="h-10 w-auto" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=co.tempo.media"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block leading-none"
      >
        <img src={playStoreImg} alt="Get it on Google Play" className="h-10 w-auto" />
      </a>
    </div>
  )
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * `dark` (default) uses #212121 background; `light` uses white.
   */
  variant?: FooterVariant
}

export function Footer({ className, variant = 'light', ...props }: FooterProps) {
  const year = currentYearJakarta()
  const scheme = SCHEMES[variant]

  // 18px bold, line-height 100%, letter-spacing 0% (Figma spec)
  const headingCls = cn(
    'mb-4 text-[18px] font-bold leading-none',
    'text-center md:text-left',
    scheme.heading,
  )

  // 16px regular, line-height 1 (Figma spec)
  const linkCls = cn('block text-base font-normal leading-none', scheme.link)

  return (
    <footer role="contentinfo" className={cn('w-full', scheme.root, className)} {...props}>
      {/* Desktop: max-w-1366, px-148, py-32, gap-24 between sections.
          Mobile: px-5, py-32 (sections own their spacing). */}
      <div className="mx-auto max-w-[1366px] px-5 max-md:py-8 md:flex md:flex-col md:gap-6 md:px-[148px] md:py-8">

        {/* Mobile-only: trust badges centered at the very top */}
        <TrustBadges className="justify-center md:hidden" />

        {/* ── Top: quote · social · apps ──────────────── */}
        {/* Mobile: stacked + centered, 28px gap, 32px vertical padding
            Desktop: row, 64px gap, 32px vertical padding, left-aligned */}
        <div className="flex flex-col items-center gap-7 py-8 text-center md:flex-row md:items-start md:gap-16 md:py-0 md:text-left">

          {/* Editorial quote — hidden on mobile */}
          {/* font: Roboto 400 Italic 16px / 156% / -1% letter-spacing */}
          <p className={cn('hidden flex-1 text-base font-normal italic leading-[156%] tracking-[-0.01em] md:block', scheme.quote)}>
            Asas jurnalisme kami bukan jurnalisme yang memihak satu golongan. Kami percaya
            kebajikan, juga ketidakbajikan, tidak menjadi monopoli satu pihak. Kami percaya tugas
            pers bukan menyebarkan prasangka, justru melenyapkannya, bukan membenihkan kebencian,
            melainkan mengkomunikasikan saling pengertian. Jurnalisme kami bukan jurnalisme untuk
            memaki atau mencibirkan bibir, juga tidak dimaksudkan untuk menjilat atau menghamba ~{' '}
            {/* font: Roboto 700 Italic 16px / 156% / -1% letter-spacing */}
            <span className={cn('text-base font-bold italic leading-[156%] tracking-[-0.01em]', scheme.quoteDate)}>6 Maret 1971</span>
          </p>

          {/* Media Sosial — 122×121px fixed column on desktop */}
          <div className="w-full flex-shrink-0 md:h-[121px] md:w-[122px]">
            <p className={headingCls}>Media Sosial</p>
            <SocialIcons imgClass={scheme.socialImg} />
          </div>

          {/* Unduh Aplikasi Tempo */}
          <div className="w-full flex-shrink-0 md:w-auto">
            <p className={headingCls}>Unduh Aplikasi Tempo</p>
            <AppButtons />
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────── */}
        <hr className={cn('border-0 border-t', scheme.divider)} />

        {/* ── Mid: Jaringan Media · Informasi ─────────── */}
        {/* Desktop: 642px network + 48px gap + 380px info
            Mobile: only Informasi shown */}
        <div className="flex flex-col gap-8 py-8 pb-10 md:flex-row md:items-start md:gap-12 md:py-0">

          {/* Jaringan Media — hidden on mobile */}
          <div className="hidden md:flex md:w-[642px] md:flex-none md:flex-col md:gap-8">
            <p className={cn('text-[18px] font-bold leading-none', scheme.heading)}>
              Jaringan Media
            </p>

            {/* 4 columns × 127px each, space-between */}
            <div className="flex justify-between gap-6">
              {MEDIA_NETWORK.map((col, ci) => (
                <div key={ci} className="flex w-[127px] flex-none flex-col gap-4">
                  {col.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkCls}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div>
              <p className={cn('mb-4 text-[18px] font-bold leading-none', scheme.heading)}>
                Trustworthy News
              </p>
              <TrustBadges />
            </div>
          </div>

          {/* Informasi — full-width on mobile, 380px on desktop */}
          <div className="w-full md:flex md:w-[380px] md:flex-shrink-0 md:flex-col md:gap-6">
            {/* Title hidden on mobile */}
            <p className={cn('hidden text-[18px] font-bold leading-none md:block', scheme.heading)}>
              Informasi
            </p>

            {/* Links: row layout on both mobile and desktop (per Figma) */}
            <div className="flex flex-row gap-4 md:gap-6">
              {INFO_COLS.map((col, ci) => (
                <div key={ci} className="min-w-0 flex-1 flex flex-col gap-4">
                  {col.map((link) => (
                    <a key={link.name} href={link.url} className={linkCls}>
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ───────────────────────────────── */}
      <div className={scheme.bottom}>
        <div className="mx-auto flex max-w-[1366px] justify-center px-5 py-4">
          <span className="text-xs">© {year} Tempo - Hak Cipta Dilindungi Hukum</span>
        </div>
      </div>
    </footer>
  )
}
