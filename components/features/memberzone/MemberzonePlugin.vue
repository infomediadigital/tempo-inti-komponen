<script setup lang="ts">
defineProps<{
  data: any
  templateFor: string
  side: 'right' | 'left'
  ssoUrl: string
}>()
</script>

<template>
  <ui-memberzone-root>
    <ui-memberzone-trigger as-child>
      <button type="button" class="text-black cursor-pointer">
        <figure class="bg-white w-9 h-9 relative overflow-hidden rounded-full border border-gray-600">
          <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-sm text-gray-600">
            {{ data.first_letter_of_name }}
          </p>
        </figure>
      </button>
    </ui-memberzone-trigger>
    <memberzone-base :data="data" :template-for="templateFor" :side="side" :sso-url="ssoUrl" />
  </ui-memberzone-root>
</template>
