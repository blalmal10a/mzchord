<template>
  <q-list>
    <template
      v-for="(route_group, index) in routes"
      :key="index"
    >

      <template
        v-for="(route, routeIndex) in route_group.children"
        :key="routeIndex"
      >
        <nav-item :route="route" />
      </template>

    </template>
  </q-list>
</template>
<script setup>
import routes from 'src/router/routes';
import NavItem from './NavItem.vue';


</script>
