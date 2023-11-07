<template>
  <q-page
    class=""
    padding
  >
    <!-- <q-card
      flat
      bordered
      class="q-pa-xl"
    > -->

    <div
      class="row q-col-gutter-md text-center"
      style="font-size: min(15vw, 15vh);"
    >


      <div class="col-12 col-sm-6 col-lg-4 ">
        <q-card>
          <q-card-section class="q-py-none">
            {{ songs.pagination.rowsNumber }}
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
            {{ artists.pagination.rowsNumber }}
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
            {{ users.pagination.rowsNumber }}
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


    <!-- </q-card> -->

  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import artists from 'src/scripts/artists/artists';
import chords from 'src/scripts/chords/chords';
import songs from 'src/scripts/songs/songs';
import users from 'src/scripts/users/users';
import { onMounted } from 'vue';

//
onMounted(() => {
  songs.getList();
  artists.getList();
  users.getList();
  // api.post('auth/logout')
})
</script>
