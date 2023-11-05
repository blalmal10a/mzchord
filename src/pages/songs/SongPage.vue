<template>
  <q-page padding>
    <q-table
      :rows="songs.list"
      v-model:pagination="songs.pagination"
      @request="songs.getList"
      :columns="songs.columns"
      :filter="songs.pagination.search"
    >
      <template v-slot:top>
        <div class="full-width">
          <div class="row justify-between  q-col-gutter-sm">
            <div class="col-auto">
              <q-input
                dense
                outlined
                debounce="500"
                label="Search "
                style="min-width: min(300px, 90vw);"
                v-model="songs.pagination.search"
              ></q-input>
            </div>
            <div class="col-auto">
              <q-btn
                label="add"
                icon="add"
                color="primary"
                :to="{
                  name: 'song-form',
                  params: {
                    id: 'add',
                  }
                }"
              ></q-btn>
            </div>

          </div>

        </div>

      </template>
      <template v-slot:body-cell-actions="props">

        <q-td :props="props">
          <div class="row justify-end q-col-gutter-sm">
            <div class="col-auto">
              <q-btn
                flat
                dense
                round
                icon="view_list"
                color="primary"
                @click="() => {
                  songs.detail = { ...props.row }
                  $router.push({
                    name: 'song-chords',
                    params: {
                      songId: props.row._id
                    }
                  })
                }"
              ></q-btn>
            </div>
            <div class="col-auto">
              <q-btn
                flat
                dense
                round
                icon="edit"
                color="primary"
                @click="() => {
                  songs.detail = { ...props.row }
                  $router.push({
                    name: 'song-form',
                    params: {
                      id: props.row._id
                    }
                  })
                }"
              ></q-btn>
            </div>
            <div class="col-auto">
              <q-btn
                flat
                dense
                round
                icon="delete"
                color="negative"
                @click="() => {
                  r3.data = { ...props.row }
                  r3.endpoint = 'song'
                  showConfirmDeleteDialog = true;
                }"
              ></q-btn>
            </div>
          </div>

        </q-td>
      </template>
    </q-table>
    <confirm-delete-dialog />

  </q-page>
</template>
<script setup>
import { onMounted } from 'vue';

import songs from 'src/scripts/songs/songs';
import v from 'src/scripts/v.js'
import showConfirmDeleteDialog from 'src/scripts/shared/show-confirm-delete-dialog';

import ConfirmDeleteDialog from 'src/components/global/ConfirmDeleteDialog.vue';
import r3 from 'src/scripts/shared/r3';




onMounted(() => {
  const { q, route, router } = v;
  songs.getList();
});
</script>
