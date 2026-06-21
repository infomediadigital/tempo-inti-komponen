import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes safely, resolving conflicts.
 * Combines clsx (conditional classes) with tailwind-merge (dedupe/override).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
