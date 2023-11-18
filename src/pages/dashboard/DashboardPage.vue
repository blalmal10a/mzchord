<template>
  <q-page
    class=""
    padding
  >


    <div
      class="row q-col-gutter-md text-center"
      style="font-size: min(15vw, 15vh);"
    >
      <div class="col-12 col-sm-6 col-lg-4 ">
        <q-card>
          <q-card-section class="q-py-none">
            {{ statisticData.totalPublishedChords ?? 0 }}
          </q-card-section>
          <q-card-section
            style="font-size: min(10vw,10vh);"
            class="q-py-none"
          >
            CHORDS
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-lg-4 ">
        <q-card>
          <q-card-section class="q-py-none">
            {{ statisticData.totalSongs ?? 0 }}
          </q-card-section>
          <q-card-section
            style="font-size: min(10vw,10vh);"
            class="q-py-none"
          >
            SONGS
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 ">
        <q-card>
          <q-card-section class="q-py-none">
            {{ statisticData.totalArtists ?? 0 }}
          </q-card-section>
          <q-card-section
            style="font-size: min(10vw,10vh);"
            class="q-py-none"
          >
            ARTISTS
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-lg-4 ">
        <q-card>
          <q-card-section class="q-py-none">
            {{ statisticData.totalUsers ?? 0 }}
          </q-card-section>
          <q-card-section
            style="font-size: min(10vw,10vh);"
            class="q-py-none"
          >
            USERS
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import artists from 'src/scripts/artists/artists';
import chords from 'src/scripts/chords/chords';
import songs from 'src/scripts/songs/songs';
import users from 'src/scripts/users/users';
import { onMounted, ref } from 'vue';
const statisticData = ref({})
//
onMounted(() => {
  getStatistics();
  // songs.getList();
  // artists.getList();
  // users.getList();
  // api.post('auth/logout')
});
async function getStatistics() {
  try {
    const res = await api.get('dashboard')
    statisticData.value = res.data
  } catch (error) {
    console.error(error.message);
  }
}
</script>
