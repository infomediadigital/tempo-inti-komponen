<script setup lang="ts">
import { buttonVariants } from '..'
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  size?: 'sm' | 'md' | 'lg',
  noDisplay?: string
}>()

const classes = buttonVariants({ variant: 'secondary', size: props.size })
</script>

<template>
  <button :class="classes" v-bind="$attrs">
    <slot />
    <ChevronRight class="ml-2 w-6 h-auto" :class="noDisplay"/>
  </button>
</template>
