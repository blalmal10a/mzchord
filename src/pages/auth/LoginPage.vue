<template>
  <q-page
    padding
    class="row items-center  auth-page"
    :class="{
      'justify-center': $q.screen.lt.md,
      'justify-end': $q.screen.gt.sm,
    }"
  >
    <div
      class=""
      :style="$q.screen.gt.sm ? 'padding-right: 20vw' : ''"
    >
      <LoginCard />
    </div>
  </q-page>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import v from 'src/scripts/v';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import LoginCard from 'src/components/auth/LoginCard.vue'
const { q, route, router } = v;


onMounted(() => {

});


</script>
