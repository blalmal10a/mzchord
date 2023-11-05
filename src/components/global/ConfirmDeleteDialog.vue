<template>
  <q-dialog
    v-model="showConfirmDeleteDialog"
    @hide="() => {
      r3.data = { ...{} };
      r3.endpoint = ''
    }"
  >
    <q-card class="full-width">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>CONFIRM DELETE</q-toolbar-title>
      </q-toolbar>
      <q-form>
        <q-card-section>
          Are you sure you want to delete?
        </q-card-section>
        <q-card-actions>
          <div class="full-width">

            <div class="row  no-wrap q-col-gutter-md">
              <div class="col">
                <q-btn
                  class="full-width"
                  outline
                  v-close-popup
                  label="cancel"
                ></q-btn>

              </div>
              <div class="col">
                <q-btn
                  unelevated
                  @click="onConfirmDelete"
                  class="full-width"
                  label="submit"
                  color="primary"
                ></q-btn>
              </div>
            </div>

          </div>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script setup>
import showConfirmDeleteDialog from 'src/scripts/shared/show-confirm-delete-dialog.js'
import { onConfirmDelete } from 'src/scripts/shared/delete/delete-helper'
import r3 from 'src/scripts/shared/r3';
</script>
