import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Info, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

export const alertVariants = cva('flex items-start gap-3 rounded-md border p-4 text-sm', {
  variants: {
    variant: {
      info: 'border-neutral-200 bg-neutral-50 text-neutral-900',
      success: 'border-status-success/30 bg-status-success-bg text-status-success',
      warning: 'border-amber-300 bg-amber-50 text-amber-800',
      danger: 'border-status-danger/30 bg-status-danger-bg text-status-danger',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle,
} as const

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Optional bold title rendered above the content. */
  title?: string
  /** Hide the leading status icon. */
  hideIcon?: boolean
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, hideIcon = false, children, ...props }, ref) => {
    const Icon = icons[variant ?? 'info']
    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        {!hideIcon && <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />}
        <div className="flex flex-col gap-1">
          {title && <p className="font-semibold">{title}</p>}
          {children && <div>{children}</div>}
        </div>
      </div>
    )
  },
)

Alert.displayName = 'Alert'
