import { forwardRef } from 'react'
import { X } from 'lucide-react'
import { MagnifyingGlassIcon } from '@/icons/search'
import { cn } from '@/utils/cn'

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onSubmit'> {
  /** Controlled input value. */
  value: string
  /** Called on every keystroke with the new value. */
  onValueChange?: (value: string) => void
  /** Called when the form is submitted (Enter or the search button). */
  onSubmit?: (value: string) => void
  /** Called when the clear (×) button is pressed. Defaults to submitting an empty value. */
  onClear?: () => void
}

/**
 * Search text field with a submit (search) button and a clear (×) button.
 *
 * Router-free: it surfaces `onValueChange` / `onSubmit` / `onClear` callbacks and
 * lets the consumer decide how to navigate or fetch results.
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    { value, onValueChange, onSubmit, onClear, placeholder = 'Cari artikel di sini', className, ...props },
    ref,
  ) => {
    const hasValue = value !== ''

    const handleClear = () => {
      onValueChange?.('')
      if (onClear) onClear()
      else onSubmit?.('')
    }

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit?.(value)
        }}
      >
        <div
          className={cn(
            'flex h-[37px] w-full max-w-[312px] items-center gap-4 rounded-[2px] border border-neutral-500 bg-white px-4 py-2 transition-colors focus-within:border-neutral-900',
            className,
          )}
        >
          <input
            ref={ref}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onValueChange?.(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-sm font-normal leading-normal text-neutral-900 outline-none placeholder:font-normal placeholder:text-neutral-500"
            {...props}
          />

          <div className="flex shrink-0 items-center gap-2">
            {hasValue && (
              <button
                type="button"
                aria-label="Bersihkan pencarian"
                onClick={handleClear}
                className="cursor-pointer text-brand-primary"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            <button type="submit" aria-label="Cari" className="cursor-pointer text-neutral-500">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </form>
    )
  },
)

SearchInput.displayName = 'SearchInput'
