<template>
  <q-page padding>
    <q-form @submit="artists.onSubmit">
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
              v-model="artists.detail.name"
              :rules="[val => !!val || 'Name of the artist is required']"
              label="Name"
            ></q-input>

          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <q-select
              dense
              outlined
              label="Gender"
              v-model="artists.detail.sex"
              :options="['Male', 'Female', 'Others']"
            ></q-select>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <q-input
              dense
              outlined
              v-model="artists.detail.pic"
              type="text"
              label="Profile image"
            />
          </div>
          <template
            v-for="(item, index) in artists.detail.socials"
            :key="index"
          >
            <div class="col-12 col-sm-6 col-lg-4">
              <q-input
                dense
                outlined
                @focus="$event.target.select()"
                v-model="item.link"
                type="text"
                :label="`${item.name} profile link`"
              />
            </div>
          </template>
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
import artists from 'src/scripts/artists/artists';
import v from 'src/scripts/v';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const artistImageRef = ref(null)
onMounted(() => {
  const { q, route, router } = v;
  if (route.params.id != 'add')
    artists.getDetail()
});
onBeforeUnmount(() => {
  artists.detail = {
    _id: null,
    name: "",
    sex: 'Male',
    pic: null,
    socials: [
      {
        name: "Facebook",
        link: "",
      },
      {
        name: "Instagram",
        link: "",
      },
      {
        name: "Twitter",
        link: "",
      },

    ]
  }
});

</script>
