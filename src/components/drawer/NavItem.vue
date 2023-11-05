<template>
  <q-item
    class="q-mt-xs q-mx-xs"
    clickable
    style="border: 1px solid lightblue; border-radius: 8px;;"
    :to="{
      name: route.name
    }"
    v-if="!route.meta?.hidden && route.name"
  >
    <q-item-section>

      {{ route.meta?.title }}

    </q-item-section>
  </q-item>
</template>
<script setup>
const props = defineProps(['route']);
</script>
