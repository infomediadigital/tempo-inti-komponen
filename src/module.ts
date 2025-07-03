import { defineNuxtModule, addPlugin, addComponentsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@tech-of-tempo/memberzone-module',
    configKey: 'memberzoneModule',
  },
  defaults: {
    prefix: 'tempo'
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Example: Add a runtime plugin
    addPlugin(resolve('./runtime/plugin'))

    await addComponentsDir({
      path: resolve('./runtime/components'),
      pathPrefix: false,
      prefix: 'tempo',
      global: true
    })
  }
})