export const typography = {
  fontFamily: {
    // Roboto is the default sans font for all Tempo products.
    sans: "'Roboto', ui-sans-serif, system-ui, sans-serif",
    serif: "'Roboto Serif', ui-serif, Georgia, serif",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
} as const

export type Typography = typeof typography
