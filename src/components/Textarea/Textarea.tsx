import { forwardRef, useId } from 'react'
import { cn } from '@/utils/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Visible label rendered above the field. */
  label?: string
  /** Helper text rendered below the field. */
  helperText?: string
  /** Error message; when set, the field is marked invalid. */
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, helperText, error, id, disabled, rows = 4, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = id ?? generatedId
    const helperId = `${textareaId}-helper`
    const errorId = `${textareaId}-error`
    const describedBy = error ? errorId : helperText ? helperId : undefined

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-neutral-900">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full resize-y rounded-md border border-neutral-200 bg-white px-3 py-2 text-base text-neutral-900 transition-colors',
            'placeholder:text-neutral-500 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary-light',
            'disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-60',
            error && 'border-status-danger focus:border-status-danger focus:ring-status-danger-bg',
            className,
          )}
          {...props}
        />
        {error ? (
          <p id={errorId} className="text-sm text-status-danger">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-sm text-neutral-500">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
