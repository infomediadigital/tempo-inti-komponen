export const colors = {
  brand: {
    primary: '#D61D23',
    primaryDark: '#B9191E',
    primaryLight: '#FCE8E9',
    // The button/memberzone components historically used this red variant.
    primaryAlt: '#D72329',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#EEEEEE',
    // Design-system border color (Neutral-600 in Figma variables).
    600: '#E0E0E0',
    500: '#757575',
    700: '#424242',
    900: '#212121',
    // Legacy aliases preserved from the Nuxt theme.
    1100: '#212121',
    1200: '#212121',
  },
  status: {
    successText: '#43A047',
    successBg: '#F6FFF8',
    dangerText: '#FD1515',
    dangerBg: '#FFF3F2',
  },
} as const

export type Colors = typeof colors
