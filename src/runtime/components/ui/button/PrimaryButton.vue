<script setup lang="ts">
import { buttonVariants } from '..'

const props = defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()

const classes = buttonVariants({ variant: 'primary', size: props.size })
</script>

<template>
  <button :class="classes" v-bind="$attrs">
    <slot />
  </button>
</template>
