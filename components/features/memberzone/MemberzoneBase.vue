<script setup lang="ts">
defineProps<{
  data: any
  templateFor: string
  side: 'right' | 'left'
  headerLogo: string
}>()

const sidebarHeader = ref<HTMLElement | null>(null)
</script>

<template>
  <ui-memberzone-content class="w-full p-0 bg-[#F5F5F5]" aria-describedby="hello world" :side="side">
    <ui-memberzone-header ref="sidebarHeader">
      <ui-memberzone-title class="py-3 text-xl bg-white font-semibold border-b border-[#EEEEEE] text-left lg:text-center">
        <nuxt-link to="/" external class="flex items-center">
            <nuxt-img
                :src="headerLogo"
                alt="Logo Teras"
                format="webp"
                class="ps-5 w-[140px] block lg:hidden"
            />
        </nuxt-link>
        <span class="hidden lg:block">Akun</span>
      </ui-memberzone-title>
      <ui-memberzone-description class="hidden">
        Sidebar menu mobile
      </ui-memberzone-description>
    </ui-memberzone-header>
    <memberzone-section :data="data" :template-for="templateFor" sidebar="trigger" />
  </ui-memberzone-content>
</template>
