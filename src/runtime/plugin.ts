import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      myPlugin: (msg: string) => `Hello from my plugin: ${msg}`
    }
  }
})