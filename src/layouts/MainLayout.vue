<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
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
        <q-space />
        <q-btn
          flat
          dense
          round
          @click="auth.logout"
          icon="logout"
        ></q-btn>
      </q-toolbar>

      <q-breadcrumbs
        class="q-ml-xl q-py-sm non-selectable"
        style="font-size: 22px;"
      >
        <q-breadcrumbs-el
          to="/"
          icon="home"
          class="text-white"
        />

        <template
          v-for="(item, index) in $route.meta?.ancestors"
          :key="index"
        >
          <q-breadcrumbs-el
            :to="{
              name: item.name
            }"
            :label="item.title"
            class="cursor-pointer "
            :class="{
              'text-secondary': $route.name == item.name,
              'text-white': $route.name != item.name,
            }"
          >
            <!--  -->
          </q-breadcrumbs-el>
        </template>
        <q-breadcrumbs-el
          :label="$route.meta?.title"
          class="cursor-pointer text-secondary"
        >
        </q-breadcrumbs-el>
        <!-- <template v-if="!$route.meta?.ancestors?.length">

        </template> -->
      </q-breadcrumbs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-item
        @click="$router.push('/')"
        clickable
        class="non-selectable logo-item"
      >
        <q-item-section side>
          <q-img
            style="width: 100px; border-radius: 50%;"
            src="src/assets/images/ic-music-note.jpeg"
          ></q-img>
        </q-item-section>
        <q-item-section style="font-size: 27px;">
          <q-item-label>MZ</q-item-label>
          <q-item-label>CHORD</q-item-label>
        </q-item-section>
      </q-item>
      <q-list>
        <drawer-item-list />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar';
import DrawerItemList from 'src/components/drawer/DrawerItemList.vue';
import { auth } from 'src/scripts/auth-helper';
import v from 'src/scripts/v';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

v.q = useQuasar()
v.route = useRoute()
v.router = useRouter();
const leftDrawerOpen = ref(false);
</script>

<style lang="scss">
.logo-item {
  .q-focus-helper {
    visibility: hidden !important;
  }
}
</style>

