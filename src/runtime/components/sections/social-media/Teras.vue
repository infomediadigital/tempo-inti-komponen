<script setup lang="ts">
defineOptions({ name: "SocialMediaTeras" })

defineProps<{
  socialMedia: {
    name: string
    url: string
  }[]
}>()
</script>

<template>
  <p class="text-sm font-bold text-[#212121] mb-2">Ikuti Sosial Media Kami</p>
  <div class="flex gap-3 items-center mt-4">
    <nuxt-link
      v-for="item in socialMedia"
      :key="item.name"
      :href="item.url"
      class="hover:opacity-80 transition"
      target="_blank"
      rel="noopener noreferrer"
      external
    >
      <nuxt-img
        :src="`/img/${item.name.toLowerCase()}.svg`"
        :alt="item.name"
        class="w-8 h-8"
      />
    </nuxt-link>
  </div>
</template>
