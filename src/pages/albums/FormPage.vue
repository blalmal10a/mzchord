<template>
  <q-page padding>
    <q-form @submit="albums.onSubmit">
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
              v-model="albums.detail.title"
              :rules="[val => !!val || 'Title of the album is required']"
              label="Title"
            ></q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              outlined
              dense
              no-error-icon
              v-model="albums.detail.thumbnail"
              label="Thumbnail url(link) of the album"
            ></q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              outlined
              dense
              no-error-icon
              type="date"
              v-model="albums.detail.releaseDate"
              hint=""
              label="Release date"
            ></q-input>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">

            <q-select
              dense
              outlined
              use-input
              :options="artists.list"
              v-model="albums.detail.artist"
              map-options
              emit-value
              @filter="albums.search_artist"
              option-label="name"
              option-value="_id"
              label="Artist"
              hint=""
            ></q-select>
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
import albums from 'src/scripts/albums/albums';
import artists from 'src/scripts/artists/artists';
import v from 'src/scripts/v';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
const albumImageRef = ref(null)
const password_error = computed(
  () => albums.detail.password != albums.detail.confirm_password
)
onMounted(() => {
  const { q, route, router } = v;
  if (route.params.id != 'add')
    albums.getDetail()
});
onBeforeUnmount(() => {
  albums.detail = {
    _id: null,
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  }
});

</script>
