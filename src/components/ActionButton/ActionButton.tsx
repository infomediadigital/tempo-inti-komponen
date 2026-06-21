import { forwardRef, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

/**
 * Design-system button (the Figma "Button" component).
 *
 * Faithful to the spec: 1px border radius, `Primary-Main` (#D61D23) fill,
 * Small = 32px tall with 8px/12px padding and an 8px gap. Distinct from the
 * lighter {@link Button} primitive (which uses `rounded-sm`).
 */
export const actionButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[1px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      styleType: {
        fill: '',
        outline: 'bg-white',
      },
      size: {
        // Small: 32px tall, P8 (8px) vertical / P12 (12px) horizontal padding, 8px gap.
        small: 'h-8 px-3 py-2 text-sm',
        medium: 'h-10 px-4 py-2.5 text-base',
        large: 'h-12 px-6 py-3 text-lg',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        styleType: 'fill',
        // background: var(--Primary-Main, #D61D23)
        class: 'bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-light',
      },
      {
        variant: 'primary',
        styleType: 'outline',
        class: 'border border-brand-primary text-brand-primary hover:bg-brand-primary-light focus:ring-brand-primary-light',
      },
      {
        variant: 'secondary',
        styleType: 'fill',
        class: 'bg-neutral-900 text-white hover:bg-neutral-700 focus:ring-neutral-200',
      },
      {
        variant: 'secondary',
        styleType: 'outline',
        class: 'border border-neutral-600 text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-200',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      styleType: 'fill',
      size: 'small',
    },
  },
)

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionButtonVariants> {
  /** Show a loading spinner and disable interaction. */
  loading?: boolean
  /** Icon node rendered before the label. Only shown when `showIconLeft` is true. */
  iconLeft?: ReactNode
  /** Icon node rendered after the label. Only shown when `showIconRight` is true. */
  iconRight?: ReactNode
  /** Toggle the left icon (Figma: Show Icon Left). Default false. */
  showIconLeft?: boolean
  /** Toggle the right icon (Figma: Show Icon Right). Default false. */
  showIconRight?: boolean
}

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    {
      className,
      variant,
      styleType,
      size,
      loading = false,
      disabled,
      iconLeft,
      iconRight,
      showIconLeft = false,
      showIconRight = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(actionButtonVariants({ variant, styleType, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          showIconLeft && iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>
        )}
        {children}
        {showIconRight && iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </button>
    )
  },
)

ActionButton.displayName = 'ActionButton'
