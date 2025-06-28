<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, navigateTo } from "#imports";

interface MemberzoneMenuItem {
  path: string
  pathSSO: string
  label: string
}

const route = useRoute()
const activeLink = ref('')
const links = ref<MemberzoneMenuItem[]>([])

const data = [{
  path: '/users/user-details',
  pathSSO: `/users/user-details`,
  label: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    class="mr-2 mt-[2px]"
    >
    <path
        d="M9.5 11.875C12.1234 11.875 14.25 9.74835 14.25 7.125C14.25 4.50165 12.1234 2.375 9.5 2.375C6.87665 2.375 4.75 4.50165 4.75 7.125C4.75 9.74835 6.87665 11.875 9.5 11.875Z"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M2.2998 16.0306C3.02979 14.767 4.07943 13.7178 5.34328 12.9884C6.60713 12.259 8.04068 11.875 9.49992 11.875C10.9592 11.875 12.3927 12.259 13.6565 12.9885C14.9204 13.718 15.97 14.7672 16.7 16.0307"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    </svg>
    <span>Informasi Akun</span>
  `,
}, {
  path: '/users/settings',
  pathSSO: `/users/settings`,
  label: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    class="mr-2 mt-[2px]"
    >
    <path
        d="M9.5 13.0625C11.4675 13.0625 13.0625 11.4675 13.0625 9.5C13.0625 7.53249 11.4675 5.9375 9.5 5.9375C7.53249 5.9375 5.9375 7.53249 5.9375 9.5C5.9375 11.4675 7.53249 13.0625 9.5 13.0625Z"
        stroke="#212121"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M13.6309 4.83069C13.821 4.99904 14.0008 5.17879 14.1691 5.36893L16.197 5.6585C16.5258 6.23113 16.7794 6.84382 16.9513 7.48138L15.7227 9.11952C15.7227 9.11952 15.7381 9.62713 15.7227 9.88061L16.9518 11.5193C16.7795 12.1567 16.5255 12.7692 16.1963 13.3416L14.1691 13.6312C14.1691 13.6312 13.8211 14.001 13.631 14.1694L13.3414 16.1972C12.7688 16.5261 12.1561 16.7796 11.5186 16.9516L9.88052 15.7229C9.62702 15.7384 9.37282 15.7384 9.11932 15.7229L7.48067 16.9521C6.84323 16.7797 6.23071 16.5257 5.65831 16.1965L5.3688 14.1695C5.17865 14.0011 4.9989 13.8214 4.83055 13.6312L2.80272 13.3417C2.47387 12.769 2.22033 12.1564 2.04838 11.5188L3.27704 9.88066C3.27704 9.88066 3.26158 9.37305 3.27699 9.11957L2.04785 7.48092C2.22023 6.84348 2.47419 6.23096 2.80343 5.65856L4.83045 5.36905C4.9988 5.1789 5.17855 4.99915 5.36869 4.8308L5.65826 2.80297C6.23089 2.47412 6.84358 2.22058 7.48114 2.04863L9.11917 3.27724C9.37267 3.26183 9.62687 3.26183 9.88037 3.27723L11.519 2.0481C12.1565 2.22048 12.769 2.47443 13.3414 2.80367L13.6309 4.83069Z"
        stroke="#212121"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    </svg>
    <span>Pengaturan Akun</span>
  `,
}, {
  path: '/users/subscriptions',
  pathSSO: `/users/subscriptions`,
  label: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    class="mr-2 mt-[2px]"
    >
    <path
        d="M2.96875 4.75V14.25C2.96875 14.5649 3.09386 14.867 3.31656 15.0897C3.53926 15.3124 3.84131 15.4375 4.15625 15.4375H16.0312C16.1887 15.4375 16.3397 15.3749 16.4511 15.2636C16.5624 15.1522 16.625 15.0012 16.625 14.8438V6.53125C16.625 6.37378 16.5624 6.22276 16.4511 6.11141C16.3397 6.00006 16.1887 5.9375 16.0312 5.9375H4.15625C3.84131 5.9375 3.53926 5.81239 3.31656 5.58969C3.09386 5.36699 2.96875 5.06494 2.96875 4.75ZM2.96875 4.75C2.96875 4.43506 3.09386 4.13301 3.31656 3.91031C3.53926 3.68761 3.84131 3.5625 4.15625 3.5625H14.25"
        stroke="#212121"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M13.4766 10.6875C13.4766 10.7522 13.4241 10.8047 13.3594 10.8047C13.2947 10.8047 13.2422 10.7522 13.2422 10.6875C13.2422 10.6228 13.2947 10.5703 13.3594 10.5703C13.4241 10.5703 13.4766 10.6228 13.4766 10.6875Z"
        fill="#212121"
        stroke="#212121"
        stroke-width="1.25"
    />
    </svg>
    <span>Langganan</span>
  `,
}, {
  path: '/users/voucher-instant',
  pathSSO: `/voucher/instant`,
  label: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    class="mr-2 mt-[2px]"
    >
    <path
        d="M7.125 4.15625V14.8438"
        stroke="#212121"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M1.78125 12.4087C1.78122 12.2719 1.8285 12.1393 1.91506 12.0334C2.00162 11.9274 2.12214 11.8547 2.25619 11.8275C2.7926 11.7179 3.27469 11.4264 3.62092 11.0023C3.96714 10.5782 4.15625 10.0475 4.15625 9.5C4.15625 8.95251 3.96714 8.42182 3.62092 7.99771C3.27469 7.57359 2.7926 7.28209 2.25619 7.1725C2.12214 7.14528 2.00162 7.07256 1.91506 6.96664C1.8285 6.86072 1.78122 6.72814 1.78125 6.59135V4.75C1.78125 4.59253 1.84381 4.44151 1.95516 4.33016C2.06651 4.21881 2.21753 4.15625 2.375 4.15625H16.625C16.7825 4.15625 16.9335 4.21881 17.0448 4.33016C17.1562 4.44151 17.2188 4.59253 17.2188 4.75V6.59135C17.2188 6.72814 17.1715 6.86073 17.0849 6.96664C16.9984 7.07256 16.8779 7.14529 16.7438 7.1725C16.2074 7.28209 15.7253 7.5736 15.3791 7.99771C15.0329 8.42183 14.8437 8.95251 14.8437 9.5C14.8437 10.0475 15.0329 10.5782 15.3791 11.0023C15.7253 11.4264 16.2074 11.7179 16.7438 11.8275C16.8779 11.8547 16.9984 11.9274 17.0849 12.0334C17.1715 12.1393 17.2188 12.2719 17.2188 12.4087V14.25C17.2188 14.4075 17.1562 14.5585 17.0448 14.6698C16.9335 14.7812 16.7825 14.8438 16.625 14.8438H2.375C2.21753 14.8438 2.06651 14.7812 1.95516 14.6698C1.84381 14.5585 1.78125 14.4075 1.78125 14.25V12.4087Z"
        stroke="#212121"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    </svg>
    <span>Kupon Instan</span>
  `,
}]
links.value = data

watch(() => route.path, (newPath: string) => {
  activeLink.value = newPath
}, { immediate: true })

function onLogOut() {
  navigateTo(`/sso/sso/logout?ref=${location.origin + route.fullPath}`, {
    external: true,
    open: {
      target: '_blank',
    },
  })
}

function isActive(path: string) {
  return activeLink.value === path
}
</script>

<template>
  <div class="general-menus px-6 mt-6">
    <NuxtLink
      v-for="link in links"
      :key="link.path"
      external
      class="py-2.5 active relative text-base font-medium text-neutral-1100 flex flex-row gap-2 items-center border-b border-[#EEEEEE]"
      :class="[{ 'router-link-exact-active': isActive(link.path) }]"
      :to="link.path"
    >
      <span class="flex gap-1" v-html="link.label" />
    </NuxtLink>
    <NuxtLink class="py-2.5 relative text-base font-medium text-neutral-1100 flex flex-row gap-2 items-center border-b border-[#EEEEEE] cursor-pointer" to="https://api.whatsapp.com/send/?phone=%2B628&text&type=phone_number&app_absent=0" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        class="mr-2 mt-[2px]"
      >
        <path
          d="M16.733 9.5H14.358C14.0431 9.5 13.7411 9.62512 13.5184 9.84781C13.2957 10.0705 13.1705 10.3726 13.1705 10.6875V13.6563C13.1705 13.9712 13.2957 14.2732 13.5184 14.4959C13.7411 14.7186 14.0431 14.8438 14.358 14.8438H15.5455C15.8605 14.8438 16.1625 14.7186 16.3852 14.4959C16.6079 14.2732 16.733 13.9712 16.733 13.6563V9.5ZM16.733 9.5C16.733 8.55979 16.547 7.62887 16.1855 6.76091C15.8241 5.89295 15.2944 5.10511 14.627 4.4428C13.9597 3.7805 13.1679 3.25682 12.2972 2.90196C11.4265 2.5471 10.4942 2.36808 9.55402 2.3752C8.61384 2.36808 7.68153 2.5471 6.81086 2.90196C5.94018 3.25682 5.14835 3.7805 4.481 4.4428C3.81365 5.10511 3.28399 5.89295 2.92254 6.76091C2.56109 7.62887 2.375 8.55979 2.375 9.5V13.6563C2.375 13.9712 2.50011 14.2732 2.72281 14.4959C2.94551 14.7186 3.24756 14.8438 3.5625 14.8438H4.75C5.06494 14.8438 5.36699 14.7186 5.58969 14.4959C5.81239 14.2732 5.9375 13.9712 5.9375 13.6563V10.6875C5.9375 10.3726 5.81239 10.0705 5.58969 9.84781C5.36699 9.62512 5.06494 9.5 4.75 9.5H2.375"
          stroke="#212121"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.733 13.6562V15.4375C16.733 16.0674 16.4828 16.6715 16.0374 17.1169C15.592 17.5623 14.9879 17.8125 14.358 17.8125H10.0938"
          stroke="#212121"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Bantuan Pelanggan</span>
    </NuxtLink>
    <client-only>
      <NuxtLink class="py-2.5 relative text-base font-medium text-neutral-1100 flex flex-row gap-2 items-center border-b border-[#EEEEEE] cursor-pointer" @click="onLogOut">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          class="mr-2 mt-[2px]"
        >
          <path
            d="M12.916 6.38281L16.0332 9.5L12.916 12.6172"
            stroke="#424242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.71875 9.5H16.0312"
            stroke="#424242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.90625 16.0312H3.5625C3.40503 16.0312 3.25401 15.9687 3.14266 15.8573C3.03131 15.746 2.96875 15.595 2.96875 15.4375V3.5625C2.96875 3.40503 3.03131 3.25401 3.14266 3.14266C3.25401 3.03131 3.40503 2.96875 3.5625 2.96875H8.90625"
            stroke="#424242"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Keluar</span>
      </NuxtLink>
    </client-only>
  </div>
</template>

<style scoped>
.general-menus .router-link-exact-active {
  color: #d61d23;
}
.general-menus .router-link-exact-active svg path {
  stroke: #d61d23;
}
</style>
