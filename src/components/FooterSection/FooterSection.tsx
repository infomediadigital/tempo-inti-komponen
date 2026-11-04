import { cn } from '@/utils/cn'
import instagramIcon from '@/assets/images/instagram.svg?inline'
import xIcon from '@/assets/images/x-social-media-black-icon.svg?inline'
import facebookIcon from '@/assets/images/facebook-social-media-black-icon.svg?inline'
import tiktokIcon from '@/assets/images/tiktok.svg?inline'
import threadsIcon from '@/assets/images/threads.svg?inline'
import appStoreImg from '@/assets/images/appstore.png?inline'
import playStoreImg from '@/assets/images/playstore.png?inline'
import tempoEnLogo from '@/assets/images/tempo-en.svg?inline'

const TRUST_AMSI = 'https://asset.tempo.co/sb/img/logo-trusted.webp'
const TRUST_IFCN =
  'https://cdn.ifcncodeofprinciples.poynter.org/storage/badges/B7064769-BAC4-E2CC-0F1E-F19116B82C6F.png'
const IFCN_URL = 'https://ifcncodeofprinciples.poynter.org/profile/tempo'

interface FooterLink {
  name: string
  url: string
}

const TOP_LINKS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'NEWS',
    links: [
      { name: 'Tempo.co', url: 'https://www.tempo.co/' },
      { name: 'Teras', url: 'https://teras.id/' },
      { name: 'Tempo TV', url: 'https://www.youtube.com/channel/UCpe3xgNfL52vIhV5kewEc1Q' },
      { name: 'Tempo Witness', url: 'https://witness.tempo.co/' },
      { name: 'Tempo Store', url: 'https://store.tempo.co/' },
    ],
  },
  {
    title: 'KNOWLEDGE',
    links: [
      { name: 'Tempo Institute', url: 'https://tempoinstitute.com/' },
      { name: 'Tempo Data Science', url: 'https://data.tempo.co/' },
      { name: 'Ruang dan Tempo', url: 'https://www.instagram.com/ruangdantempo/?hl=en' },
    ],
  },
  {
    title: 'LIFESTYLE',
    links: [
      { name: 'Cantika', url: 'https://www.cantika.com/' },
      { name: 'Gooto', url: 'https://www.gooto.com/' },
      { name: 'Indonesiana', url: 'https://www.indonesiana.id/' },
      { name: 'Telusuri', url: 'https://telusuri.id/' },
    ],
  },
  {
    title: 'YOUTH',
    links: [
      { name: 'Kok Bisa', url: 'https://www.youtube.com/channel/UCu0yQD7NFMyLu_-TmKa4Hqg' },
      { name: 'Temotion', url: 'https://www.tempo-animation.id/' },
    ],
  },
]

const INFO_LINKS: FooterLink[] = [
  { name: 'About Us', url: 'https://en.tempo.co/about-us' },
  { name: 'Cyber Media Guidelines', url: 'https://en.tempo.co/cyber-media-guidelines' },
  { name: 'AI Content Usage Guidelines', url: 'https://en.tempo.co/ai-content-guidelines' },
  {
    name: 'Code of Ethics and Journalistic Guidelines',
    url: 'https://en.tempo.co/code-of-ethics',
  },
  { name: 'Terms of Service', url: 'https://en.tempo.co/terms-of-service' },
  { name: 'Advertise', url: 'https://en.tempo.co/advertise' },
  { name: 'Tempo Privacy Policy', url: 'https://en.tempo.co/privacy-policy' },
]

const PRIVACY_URL = 'https://en.tempo.co/privacy-policy'
const TERMS_URL = 'https://en.tempo.co/terms-of-service'

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

const LINK_CLS = 'text-[14px] font-medium text-white/90 transition-colors hover:text-white'

function SocialIcons() {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-4 max-lg:mb-0">
      {SOCIAL.map((s) => (
        <a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="block transition-opacity hover:opacity-80"
        >
          <img
            src={s.icon}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="block h-6 w-6 brightness-0 invert"
          />
        </a>
      ))}
    </div>
  )
}

function AppButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
      <a
        href="https://play.google.com/store/apps/details?id=co.tempo.media"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform hover:scale-105"
      >
        <img src={playStoreImg} alt="Get it on Google Play" className="h-10 w-auto" />
      </a>
      <a
        href="https://apps.apple.com/id/app/tempo/id1380254415"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform hover:scale-105"
      >
        <img src={appStoreImg} alt="Download on the App Store" className="h-10 w-auto" />
      </a>
    </div>
  )
}

function TrustBadges({ position = 'center' }: { position?: 'left' | 'center' }) {
  return (
    <div className={cn('flex items-center gap-2', position === 'left' && 'self-start')}>
      <img src={TRUST_AMSI} alt="AMSI Badge" loading="lazy" className="h-8 w-auto" />
      <a href={IFCN_URL} target="_blank" rel="noopener noreferrer" title="IFCN signatory">
        <img src={TRUST_IFCN} alt="IFCN Signatory Badge" loading="lazy" className="h-8 w-auto" />
      </a>
    </div>
  )
}

function CategoryLinks({ section }: { section: (typeof TOP_LINKS)[number] }) {
  return (
    <>
      <h3 className="mb-4 text-[14px] font-bold uppercase tracking-wide">{section.title}</h3>
      <ul className="flex flex-col gap-2.5 max-lg:gap-1.5">
        {section.links.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={LINK_CLS}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

function Quote() {
  return (
    <>
      <p className="text-[15px] leading-relaxed text-white/90">
        &ldquo;The foundation of our journalism is not one that takes sides with any single
        faction. We believe that virtue as well as vice is not the monopoly of any one party. We
        believe the duty of the press is not to spread prejudice, but to eradicate it; not to sow
        hatred, but to foster mutual understanding. Our journalism is not meant for insult or
        sneering, nor is it intended to flatter or grovel.&rdquo;
      </p>
      <p className="mt-2 text-[15px] text-white/90">— March 6, 1971</p>
    </>
  )
}

export type FooterSectionProps = React.HTMLAttributes<HTMLElement>

export function FooterSection({ className, ...props }: FooterSectionProps) {
  const year = currentYearJakarta()

  return (
    <footer
      role="contentinfo"
      className={cn('w-full bg-[#D21820] font-sans text-white', className)}
      {...props}
    >
      {/* Mobile layout */}
      <div className="px-6 py-8 lg:hidden">
        <img src={tempoEnLogo} alt="Tempo English" className="h-auto w-[120px]" />
        <div className="mt-5 w-full">
          <Quote />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
          {[TOP_LINKS[0], TOP_LINKS[1], TOP_LINKS[2], TOP_LINKS[3]].map((section) => (
            <div key={section.title}>
              <CategoryLinks section={section} />
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-6 border-t border-white/30 py-6 ">
          <div>
            <h3 className="mb-4 text-[14px] font-bold">Social Media</h3>
            <SocialIcons />
          </div>
          <div>
            <h3 className="mb-4 text-[14px] font-bold">Download Tempo App</h3>
            <AppButtons />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-white/30 pt-6 text-left">
          <p className="w-full text-[14px] text-white/90">
            © {year} Tempo English All Rights Reserved
            <span aria-hidden="true"> · </span>
            <a href={PRIVACY_URL} className="hover:text-white hover:underline">
              Privacy Policy
            </a>
            <span aria-hidden="true"> · </span>
            <a href={TERMS_URL} className="hover:text-white hover:underline">
              Terms &amp; Conditions
            </a>
          </p>
          <TrustBadges position="left" />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="mx-auto hidden max-w-[1400px] px-12 py-10 lg:block">
        <div className="grid grid-cols-1 gap-8 border-b border-white/30 pb-10 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-white/30">
          {TOP_LINKS.map((section) => (
            <div key={section.title} className="flex flex-col px-4 first:pl-0 lg:px-8">
              <CategoryLinks section={section} />
            </div>
          ))}
          <div className="flex flex-col px-4 lg:pl-8">
            <h3 className="mb-4 text-[14px] font-bold">Social Media</h3>
            <SocialIcons />
            <h3 className="mb-4 text-[14px] font-bold">DOWNLOAD APP</h3>
            <AppButtons />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 border-b border-white/30 py-10 lg:grid-cols-12 lg:gap-0 lg:divide-x lg:divide-white/30">
          <div className="pr-0 lg:col-span-7 lg:pr-12">
            <Quote />
          </div>
          <div className="pl-0 lg:col-span-5 lg:pl-12">
            <h3 className="mb-5 text-[16px] font-bold">Information</h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              {INFO_LINKS.map((link) => (
                <a key={link.name} href={link.url} className={LINK_CLS}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pt-8 text-center sm:flex-row">
          <p className="text-[14px] text-white/90">© {year} Tempo English All Rights Reserved</p>
          <TrustBadges />
        </div>
      </div>
    </footer>
  )
}
