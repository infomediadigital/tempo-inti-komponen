<script setup lang="ts">
import type { SocialLink } from "@/types/data.ts"

defineOptions({ name: "SocialMediaTeras" })

defineProps<{
  socialMedia: SocialLink[]
}>()
</script>

<template>
  <p class="text-sm font-bold text-[#212121] mb-2">Ikuti Sosial Media Kami</p>
  <div class="flex gap-3 items-center mt-4">
    <a
      v-for="item in socialMedia"
      :key="item.name"
      :href="item.url"
      class="hover:opacity-80 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <nuxt-img
        :src="`/img/${item.name.toLowerCase()}.svg`"
        :alt="item.name"
        class="w-8 h-8"
      />
    </a>
  </div>
</template>
