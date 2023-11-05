<template>
  <q-page padding>
    <q-table
      :rows="chords.list"
      v-model:pagination="chords.pagination"
      @request="chords.getList"
      :columns="chords.columns"
    >
      <template v-slot:top>
        <div class="row full-width">
          <div class="col">

          </div>
          <div class="col-auto">
            <q-btn
              label="add"
              icon="add"
              color="primary"
              :to="{
                name: 'chord-form',
                params: {
                  songId: $route.params.id,
                  id: 'add',
                }
              }"
            ></q-btn>
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
                icon="edit"
                color="primary"
                @click="() => {
                  chords.detail = { ...props.row }
                  $router.push({
                    name: 'chord-form',
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
                  r3.endpoint = 'chord'
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

import chords from 'src/scripts/chords/chords';
import v from 'src/scripts/v.js'
import showConfirmDeleteDialog from 'src/scripts/shared/show-confirm-delete-dialog';
import r3 from 'src/scripts/shared/r3';

import ConfirmDeleteDialog from 'src/components/global/ConfirmDeleteDialog.vue';

onMounted(() => {
  const { q, route, router } = v;
  chords.getList();
});
</script>
