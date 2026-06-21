import { cn } from '@/utils/cn'

export interface SearchSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Result category label, e.g. "ARTIKEL". */
  category: string
  /** Number of matching results. */
  count: number
  /** The search keyword that produced these results. */
  query?: string
}

/** Heading + result-count summary shown above a list of search results. */
export function SearchSummary({ category, count, query, className, ...props }: SearchSummaryProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <p className="text-lg font-bold">HASIL PENCARIAN {category}</p>
      <p className="text-xs text-neutral-700">
        Ada {count} {category.toLowerCase()} yang mengandung kata kunci{' '}
        <span className="font-medium">&quot;{query}&quot;</span>
      </p>
    </div>
  )
}
