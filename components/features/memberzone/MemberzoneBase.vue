<script setup lang="ts">
defineProps<{
  data: any
  templateFor: string
  side: 'right' | 'left'
}>()

const sidebarHeader = ref<HTMLElement | null>(null)
</script>

<template>
  <ui-memberzone-content class="w-full p-0 bg-[#F5F5F5]" aria-describedby="hello world" :side="side">
    <ui-memberzone-header ref="sidebarHeader">
      <ui-memberzone-title class="py-3 text-xl bg-white font-semibold border-b border-[#EEEEEE] text-center">
        <span>Akun</span>
      </ui-memberzone-title>
      <ui-memberzone-description class="hidden">
        Sidebar menu mobile
      </ui-memberzone-description>
    </ui-memberzone-header>
    <memberzone-section :data="data" :template-for="templateFor" sidebar="trigger" />
  </ui-memberzone-content>
</template>
