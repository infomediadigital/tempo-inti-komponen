<script setup lang="ts">
const dummyUser = {
  "id": 9896432,
  "email": "anjartempo2@gmail.com",
  "fullname": "Anjarrr",
  "phone_number": "082197811406",
  "birthday": "2005-09-02T00:00:00+07:00",
  "city": "KOTA JAKARTA SELATAN",
  "confirmed_at": "2025-04-10T12:24:51+07:00",
  "nonvip_subscription": false,
  "nonvip_periode_subscription_start": "",
  "nonvip_periode_subscription_end": "",
  "nonvip_tts_subscription": true,
  "nonvip_tts_periode_subscription_start": "",
  "nonvip_tts_periode_subscription_end": "",
  "vip_subscription": false,
  "vip_period_subscription_start": "",
  "vip_period_subscription_end": "",
  "content_access": [],
  "initial": "An",
  "first_letter_of_name": "A"
}
</script>

<template>
  <div>
    <memberzone-wrapper />
    <h1 class="text-3xl font-bold underline">
      Hello world
    </h1>
    <memberzone-plugin :data="dummyUser" template-for="tempo" side="right" header-logo="/img/teras_logo.png"/>
  </div>
</template>
