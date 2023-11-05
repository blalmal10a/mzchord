<template>
  <q-card
    flat
    bordered
    class="full-width"
    style="min-height: 50vh; min-width: min(400px, 100vw);"
  >

    <q-form @submit="auth.register">
      <q-card-section
        class="q-pa-xl"
        style="width: 100%"
      >
        <h4 class="q-my-none">Sign in</h4>
        <q-separator spaced></q-separator>
        <q-input
          autofocus
          dense
          class="q-mt-md"
          v-model="user.name"
          type="text"
          label="Name"
          :rules="[val => !!val || 'Name is required']"
        />
        <q-input
          class="q-mt-md"
          dense
          v-model="user.email"
          type="email"
          label="email"
          :rules="[val => !!val || 'email is required']"
        />
        <q-input
          dense
          v-model="user.password"
          :type="showPassword ? 'text' : 'password'"
          label="password"
          hint=""
          :error="passwordConfirmationError"
          :error-message="passwordConfirmationError ? 'password mismatched' : 'password is required'"
          :rules="[val => !!val || 'email is required']"
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


        <q-input
          dense
          v-model="user.confirm_password"
          :type="showPassword ? 'text' : 'password'"
          label="password"
          hint=""
          :error="passwordConfirmationError"
          :error-message="passwordConfirmationError ? 'password mismatched' : 'password is required'"
          :rules="[val => !!val || 'password is required']"
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
          label="Register"
          class="full-width"
        ></q-btn>
        <div
          class="text-center q-mt-sm text-caption cursor-pointer"
          @click="$router.push({ name: 'login' })"
        >
          Login
        </div>
      </q-card-section>
    </q-form>
  </q-card>
</template>
<script setup>
import v from 'src/scripts/v';
import { auth } from 'src/scripts/auth-helper'
import { computed, onMounted, ref } from 'vue';
const { q, route, router } = v;
const { user } = auth;
const showPassword = ref(false)

const passwordConfirmationError = computed(
  () => auth.user.password != auth.user.confirm_password
)
onMounted(() => {
  //
})
</script>
