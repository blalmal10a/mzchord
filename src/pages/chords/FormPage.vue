<template>
  <q-page padding>
    <q-form @submit="chords.onSubmit">
      <q-card
        flat
        bordered
        class="q-pa-md"
      >
        <div class="row q-col-gutter-sm">

          <div class="col-12 col-sm-6 col-lg-4">
            <q-select
              dense
              outlined
              label="Difficulty"
              v-model="chords.detail.difficulty"
              :options="['Beginner', 'Intermediate', 'Advance']"
            ></q-select>
          </div>

          <div class="col-12 col-sm-6 col-lg-4">
            <q-select
              dense
              outlined
              map-options
              emit-value
              disable
              label="Song"
              v-model="chords.detail.song"
              option-value="_id"
              option-label="title"
              :options="[songs.detail]"
            ></q-select>

          </div>
          <div class="col-12">
            <q-input
              outlined
              label="Chord data"
              v-model="chords.detail.data"
            >

            </q-input>
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

    <pre>
      {{ chords.detail.socials }}
    </pre>
  </q-page>
</template>
<script setup>
import chords from 'src/scripts/chords/chords';
import songs from 'src/scripts/songs/songs';
import v from 'src/scripts/v';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const chordImageRef = ref(null)
onMounted(async () => {
  const { q, route, router } = v;
  if (route.params.id != 'add')
    chords.getDetail()
  if (!songs.detail._id) {
    await songs.getDetail(null, route.params.songId)
    chords.detail.song = route.params.songId
  }
});
onBeforeUnmount(() => {
  chords.detail = {
    _id: null,
    data: '',
    difficulty: 'Intermediate',
    song: null,
    isDraft: true,
  }
});

</script>
