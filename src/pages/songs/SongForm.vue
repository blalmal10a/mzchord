<template>
  <q-page padding>
    <q-form @submit="songs.onSubmit">

      <q-card
        flat
        bordered
        class="q-pa-md"
      >
        <q-input
          label="Title"
          outlined
          dense
          v-model="songs.detail.title"
          :rules="[val => !!val || 'Title of the song is required']"
        ></q-input>
        <q-select
          dense
          outlined
          use-input
          :options="artists.list"
          v-model="songs.detail.artist"
          map-options
          emit-value
          @filter="songs.search_artist"
          option-label="name"
          option-value="_id"
          label="Artist"
          hint=""
        ></q-select>

        <q-select
          dense
          outlined
          use-input
          multiple
          :options="artists.list"
          v-model="songs.detail.featuring"
          map-options
          emit-value
          @filter="songs.search_artist"
          option-label="name"
          option-value="_id"
          label="Featuring artists"
          hint=""
        ></q-select>
        <q-input
          outlined
          v-model="songs.detail.lyric"
          type="text"
          label="Lyrics"
          autogrow
        />
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
import artists from 'src/scripts/artists/artists';
import songs from 'src/scripts/songs/songs';
import v from 'src/scripts/v';
import { onBeforeUnmount, onMounted } from 'vue';

onMounted(() => {
  const { q, route, router } = v;
  if (route.params.id != 'add')
    songs.getDetail()
});
onBeforeUnmount(() => {
  songs.detail = {
    _id: null,
    title: "",
    artist: null,
    featuring: null,
    lyric: "",
  }
})
</script>
