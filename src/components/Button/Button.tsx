import { forwardRef, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary-alt rounded-sm text-white hover:bg-brand-primary-dark focus:ring-transparent',
        secondary:
          'bg-white rounded-sm border border-brand-primary-alt text-brand-primary-alt hover:bg-neutral-50 focus:ring-neutral-200',
        danger:
          'bg-status-danger rounded-sm text-white hover:bg-brand-primary-dark focus:ring-transparent',
        ghost: 'bg-transparent rounded-sm text-brand-primary-alt hover:bg-brand-primary-light',
      },
      size: {
        // Small: 32px tall, 8px vertical / 12px horizontal padding, 8px gap (design-system spec).
        sm: 'h-8 px-3 py-2 text-sm',
        md: 'px-4 py-1.5 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Show a loading spinner and disable interaction. */
  loading?: boolean
  /** Optional icon rendered before the label (Show Icon Left). */
  iconLeft?: ReactNode
  /** Optional icon rendered after the label (Show Icon Right). */
  iconRight?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading = false, disabled, iconLeft, iconRight, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>
        )}
        {children}
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'
