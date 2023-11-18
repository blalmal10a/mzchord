<template>
  <q-page padding>
    <q-form @submit="users.onSubmit">
      <q-card
        flat
        bordered
        class="q-pa-md"
      >
        <div class="row q-col-gutter-sm">
          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              autofocus
              outlined
              dense
              no-error-icon
              v-model="users.detail.name"
              :rules="[val => !!val || 'Name of the user is required']"
              label="Name"
            ></q-input>
          </div>


          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              outlined
              dense
              type="email"
              no-error-icon
              v-model="users.detail.email"
              :rules="[val => !!val || 'email of the user is required']"
              label="email"
            ></q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              outlined
              dense
              no-error-icon
              v-model="users.detail.picture"
              :error="password_error"
              hint=""
              label="Profile Picture URL"
            ></q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              outlined
              dense
              type="password"
              no-error-icon
              v-model="users.detail.password"
              :error="password_error"
              :error-message="password_error ? 'password mismatched' : 'Password is required'"
              :rules="[val => !!val || 'password is required']"
              label="Password"
            ></q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              outlined
              dense
              type="password"
              no-error-icon
              v-model="users.detail.confirm_password"
              :error="password_error"
              :error-message="password_error ? 'password mismatched' : 'Confirm password is required'"
              :rules="[val => !!val || 'confirm password is required']"
              label="Confirm password"
            ></q-input>
          </div>
        </div>
      </q-card>
      <div
        class="q-mt-md"
        style="position: sticky;bottom: 0;"
      >
        <q-separator></q-separator>

        <div class="row justify-end q-mt-md q-col-gutter-sm">
          <div class="col-auto">
            <q-btn
              outline
              :to="{
                name: $route.meta?.ancestors?.[0]?.name
              }"
              style="min-width: 150px;"
              label="cancel"
              color="primary"
            ></q-btn>
          </div>
          <div class="col-auto">
            <q-btn
              type="submit"
              style="min-width: 150px;"
              label="Submit"
              color="primary"
            ></q-btn>
          </div>
        </div>
      </div>
    </q-form>

  </q-page>
</template>
<script setup>
import users from 'src/scripts/users/users';
import v from 'src/scripts/v';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
const userImageRef = ref(null)
const password_error = computed(
  () => users.detail.password != users.detail.confirm_password
)
onMounted(() => {
  const { q, route, router } = v;
  if (route.params.id != 'add')
    users.getDetail()
});
onBeforeUnmount(() => {
  users.detail = {
    _id: null,
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  }
});

</script>
