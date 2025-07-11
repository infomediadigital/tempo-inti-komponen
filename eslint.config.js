import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import pluginNuxt from "eslint-plugin-nuxt"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    ignores: [
      "node_modules",
      ".nuxt",
      ".output",
      "dist",
      "build",
      ".github/**",
      ".aws/**",
      "k8s-manifests/**",
      "k8s-manifest/**",
    ],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Nuxt & Vue composables
        defineNuxtPlugin: "readonly",
        defineNuxtRouteMiddleware: "readonly",
        definePageMeta: "readonly",
        navigateTo: "readonly",

        useRoute: "readonly",
        useRouter: "readonly",
        useRuntimeConfig: "readonly",
        useState: "readonly",
        useAsyncData: "readonly",
        useFetch: "readonly",
        useHead: "readonly",
        useSeoMeta: "readonly",

        // Vue core
        ref: "readonly",
        reactive: "readonly",
        computed: "readonly",
        watch: "readonly",
        onMounted: "readonly",
        onBeforeUnmount: "readonly",
        defineComponent: "readonly",
        nextTick: "readonly",

        // Pinia store (atau store custom)
        useAuthStore: "readonly",
        useViewport: "readonly",
      },
    },
  },

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Vue 3 essential rules
  pluginVue.configs["flat/essential"],

  // Nuxt plugin rules (recommended)
  {
    plugins: {
      nuxt: pluginNuxt,
    },
    rules: {
      ...pluginNuxt.configs.recommended.rules,
    },
  },

  // Parser settings for Vue SFCs with TypeScript
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
])
