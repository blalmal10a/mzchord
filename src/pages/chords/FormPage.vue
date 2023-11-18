<template>
  <q-page padding>
    <q-form @submit="chords.onSubmit">
      <q-card
        flat
        bordered
        class="q-pa-md"
      >
        <div class="row q-mt-none q-mb-md">
          "
          <span class="text-h5 text-italic">
            {{ songs.detail?.title }}
          </span>
          " <span class="self-end">- {{ songs.detail.artist?.name }}</span>
        </div>
        <div class="row  q-col-gutter-sm">
          <div class="col-12 col-sm-6 col-lg-4">
            <q-item
              dense
              class="text-grey-8"
              tag="label"
              style="height: 40px; border: 1px solid #afafaf; border-radius: 4px; ;"
            >
              <q-item-section>
                <q-radio
                  v-model="chords.detail.isDraft"
                  :val="false"
                  color="green"
                  label="Publish"
                  checked-icon="library_add_check"
                  unchecked-icon="library_add_check"
                ></q-radio>
              </q-item-section>
            </q-item>
          </div>

          <div class="col-12 col-sm-6 col-lg-4">
            <q-item
              dense
              class="text-grey-8"
              style="height: 40px; border: 1px solid #afafaf; border-radius: 4px; ;"
              tag="label"
            >
              <q-item-section>
                <q-radio
                  color="orange"
                  v-model="chords.detail.isDraft"
                  :val="true"
                  label="Draft"
                  checked-icon="history_edu"
                  unchecked-icon="history_edu"
                ></q-radio>
              </q-item-section>
            </q-item>
          </div>



          <div class="col-12 col-sm-6 col-lg-4">
            <q-select
              dense
              outlined
              label="Difficulty"
              v-model="chords.detail.difficulty"
              :options="['Beginner', 'Intermediate', 'Advanced']"
            ></q-select>
          </div>

          <!-- <div class="col-12 col-sm-6 col-lg-4">
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
            >
            </q-select>
          </div> -->
        </div>

        <div class="q-mt-md">
          <q-input
            autogrow
            outlined
            label="Chord data"
            class="chord-data"
            v-model="chords.detail.data"
          >

          </q-input>
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
import chords from 'src/scripts/chords/chords';
import songs from 'src/scripts/songs/songs';
import v from 'src/scripts/v';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const chordImageRef = ref(null)
onMounted(async () => {
  const { q, route, router } = v;
  if (route.params.id != 'add')
    chords.getDetail()

  await songs.getDetail(null, route.params.songId)
  chords.detail.song = songs.detail._id
  console.log('songs is: ', songs)
  if (route.params.id == 'add')
    chords.detail.data = songs.detail?.lyric
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

<style lang="scss">
.chord-data {
  textarea {
    min-height: 300px !important;
  }
}
</style>
