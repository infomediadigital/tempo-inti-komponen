<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  templateFor: string
  side: 'right' | 'left'
  headerLogo: string
}>()

const sidebarHeader = ref<HTMLElement | null>(null)
</script>

<template>
  <tempo-memberzone-content class="w-full p-0 bg-[#F5F5F5]" aria-describedby="hello world" :side="side">
    <tempo-memberzone-header ref="sidebarHeader">
      <tempo-memberzone-title class="py-3 text-xl bg-white font-semibold border-b border-[#EEEEEE] text-left lg:text-center">
        <nuxt-link to="/" external class="flex items-center">
            <nuxt-img
              :src="headerLogo"
              :alt="`Logo ${templateFor}`"
              format="webp"
              class="ps-5 w-[140px] block lg:hidden"
            />
        </nuxt-link>
        <span class="hidden lg:block">Akun</span>
      </tempo-memberzone-title>
      <tempo-memberzone-description class="hidden">
        Sidebar menu mobile
      </tempo-memberzone-description>
    </tempo-memberzone-header>
    <tempo-memberzone-section :template-for="templateFor" sidebar="trigger" />
  </tempo-memberzone-content>
</template>
