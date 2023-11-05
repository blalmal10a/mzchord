<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          MZ CHORD
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import { q, route, router } from 'src/scripts/v-helper'
import v from 'src/scripts/v'
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';



v.q = useQuasar();
v.route = useRoute();
v.router = useRouter();


</script>
