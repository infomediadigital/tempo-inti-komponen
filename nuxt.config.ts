import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: [
    { path: './components/features/memberzone', prefix: 'Memberzone' },
    { path: './components/features/social-media', prefix: 'SocialMedia' },
    { path: './components/ui', prefix: 'Ui' }
  ],
    // @nuxt/fonts configuration
  fonts: {
    families: [
      { name: 'Open Sans', provider: 'google' },
      { name: 'Roboto Serif', provider: 'google' },
      { name: 'Roboto', provider: 'google' },
    ],
  },

  // nuxt-viewport breakpoints configuration
  viewport: {
    breakpoints: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      tablet: 'md',
      mobile: 'xs',
    },

    fallbackBreakpoint: 'lg',
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-viewport'
  ],

  // shadcn: {
  //   prefix: 'ui',
  //   componentDir: './components/ui',
  // },
})
