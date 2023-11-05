<template>
  <q-card
    flat
    bordered
    class="full-width"
    style="min-height: 50vh; min-width: min(400px, 100vw);"
  >

    <q-form @submit="auth.login">
      <q-card-section
        class="q-pa-xl"
        style="width: 100%"
      >
        <h4 class="q-my-none">Sign in</h4>
        <q-separator spaced></q-separator>

        <q-input
          class="q-mt-md"
          dense
          v-model="user.email"
          type="email"
          label="email"
          hint=""
        />
        <q-input
          dense
          v-model="user.password"
          :type="showPassword ? 'text' : 'password'"
          label="password"
          hint=""
        >
          <template v-slot:append>
            <q-btn
              flat
              dense
              round
              tabindex="-1"
              @click="showPassword = !showPassword"
              :icon="showPassword ? 'visibility_off' : 'visibility'"
            ></q-btn>

          </template>
        </q-input>

        <q-btn
          :loading="auth.loadingLogin"
          type="submit"
          color="primary"
          label="Login"
          class="full-width"
        ></q-btn>
        <div
          class="text-center q-mt-sm text-caption cursor-pointer"
          @click="$router.push({ name: 'register' })"
        >
          Register
        </div>
      </q-card-section>
    </q-form>
  </q-card>
</template>
<script setup>
import v from 'src/scripts/v';
import { auth } from 'src/scripts/auth-helper'
import { onMounted, ref } from 'vue';
const { q, route, router } = v;
const { user } = auth;
const showPassword = ref(false)

onMounted(() => {
  //
})
</script>
