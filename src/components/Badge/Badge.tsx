import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const badgeVariants = cva(
  'inline-flex items-center gap-1 font-semibold text-xs py-1 px-2 rounded',
  {
    variants: {
      variant: {
        default: 'bg-brand-primary-light text-brand-primary',
        neutral: 'bg-neutral-100 text-neutral-700',
        success: 'bg-status-success-bg text-status-success',
        danger: 'bg-status-danger-bg text-status-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  },
)

Badge.displayName = 'Badge'
