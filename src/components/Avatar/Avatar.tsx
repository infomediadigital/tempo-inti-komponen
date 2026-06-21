import { forwardRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const avatarVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white font-semibold text-brand-primary',
  {
    variants: {
      size: {
        sm: 'h-9 w-9 text-sm',
        md: 'h-12 w-12 text-base',
        lg: 'h-[61px] w-[61px] text-xl',
      },
      bordered: {
        true: 'border border-neutral-900',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      bordered: false,
    },
  },
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  /** Image source. Falls back to initials when missing or it fails to load. */
  src?: string
  /** Alt text for the image / accessible label. */
  alt?: string
  /** Initials shown when no image is available. */
  initials?: string
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, bordered, src, alt = '', initials, ...props }, ref) => {
    const [failed, setFailed] = useState(false)
    const showImage = src && !failed

    return (
      <span ref={ref} className={cn(avatarVariants({ size, bordered }), className)} {...props}>
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <span aria-label={alt || undefined}>{initials?.toUpperCase()}</span>
        )}
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
