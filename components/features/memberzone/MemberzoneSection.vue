<script setup lang="ts">
import mock from '@/data/mock.json'
const { data, sidebar, templateFor } = defineProps<{
  data: any
  sidebar?: string
  templateFor: string
}>()

const userSubscription = [
  {
    name: 'Tempo Plus',
    logo: '/img/t_plus_logo.svg',
    link: 'https://tempo.co/',
    status: 'Aktif',
  },
  {
    name: 'Tempo VIP',
    logo: '/img/t_vip_logo.svg',
    link: 'https://membership.tempo.co/',
    status: 'Tidak Aktif',
  },
  {
    name: 'Teras',
    logo: '/img/teras_initial_logo.svg',
    link: 'https://teras.id/',
    status: 'Aktif',
  }
]

let orderedSubscriptions = [...userSubscription] // clone to avoid mutation

if (templateFor.toLowerCase() === 'teras') {
  // Move 'Teras' to the front
  const terasIndex = orderedSubscriptions.findIndex(
    (subscription) => subscription.name === 'Teras'
  )
  if (terasIndex > -1) {
    const [terasItem] = orderedSubscriptions.splice(terasIndex, 1)
    orderedSubscriptions.unshift(terasItem)
  }
} else if (templateFor.toLowerCase() === 'tempo') {
  // Move 'Tempo Plus' to the front, then 'Teras', then 'Tempo VIP'
  orderedSubscriptions.sort((a, b) => {
    const order = ['Tempo Plus', 'Teras', 'Tempo VIP']
    return order.indexOf(a.name) - order.indexOf(b.name)
  })
}

function getSubscriptionStatus(name: string) {
  // Map subscription names to content_access keys
  console.log('data', data)
  const accessMap: Record<string, string> = {
    'Tempo Plus': 'tempo_plus',
    'Teras': 'teras_plus',
    'Tempo VIP': 'tempo_vip',
  }
  const key = accessMap[name]
  if (!key) return 'Tidak Aktif'
  return data.content_access && data.content_access.includes(key) ? 'Aktif' : 'Tidak Aktif'
}

</script>

<template>
  <client-only>
    <div :class="sidebar && 'w-full max-h-[90dvh] pb-20 lg:pb-0 overflow-y-auto'">
      <div class="overflow-hidden flex gap-3 px-6 py-4">
        <div>
          <figure class="bg-white h-[61px] w-[61px] relative overflow-hidden rounded-full">
            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-xl text-[#D61D23]">
              {{ data.initial.toUpperCase() }}
            </p>
          </figure>
        </div>
        <div>
          <p class="text-lg font-semibold text-neutral-1100 leading-6 line-clamp-1 mb-1">
            {{ data.fullname }}
          </p>
          <p class="text-sm font-semibold text-[#757575] leading-4 line-clamp-1 mb-1 lg:min-w-52">
            {{ data.email }}
          </p>
          <p class="text-sm font-normal text-[#757575] leading-4">
            Tempo ID : {{ data.id }}
          </p>
        </div>
      </div>
      <div class="px-5">
        <p class="text-lg font-bold mb-4">
            Status Langganan
        </p>
        <div class="container bg-white rounded-xl p-5">
          <div v-for="(subscription, index) in orderedSubscriptions" :key="index + subscription.name" class="flex gap-3 items-center pb-4 mb-4 border-b border-[#EEEEEE]">
            <nuxt-img
              :src="subscription.logo"
              :alt="`Logo ${subscription.name} Initial`"
              class="mt-1"
              width="19px"
              height="19px"
            />
            <nuxt-link :to="subscription.link" class="text-sm underline font-semibold text-neutral-1200" external>
              {{ subscription.name }}
            </nuxt-link>
            <p
              class="text-xs font-semibold ms-auto py-1 px-2"
              :class="getSubscriptionStatus(subscription.name) === 'Aktif' ? 'bg-[#F6FFF8] text-[#43A047]' : 'bg-[#FFF3F2] text-[#FD1515]'"
            >
              {{ getSubscriptionStatus(subscription.name) }}
            </p>
          </div>

          <ui-button-primary class="w-full mt-4">
            <nuxt-link class="block w-full h-full" to="https://tempo.co/users/subscriptions" target="_blank">
              Lihat Detail Langganan
            </nuxt-link>
          </ui-button-primary>
        </div>
      </div>
    <memberzone-menus :template-for="templateFor" />
    <div v-if="templateFor === 'teras'" class="px-5 mt-4">
      <social-media-teras :social-media="mock.socialMediaTeras" />
    </div>
    </div>
  </client-only>
</template>
