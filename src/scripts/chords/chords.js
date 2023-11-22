import { api } from "src/boot/axios";
import { reactive } from "vue";
import v from "../v";
import { Notify } from "quasar";

const BASEPATH = "chords";
const chords = reactive({
  list: [],
  detail: {
    _id: null,
    data: "",
    difficulty: "Intermediate",
    song: null,
    isDraft: true,
  },

  pagination: {
    rowsPerPage: 15,
    rowsNumber: 0,
  },
  getList: getList,
  getDetail: getDetail,
  onSubmit: onSubmit,
  columns: [
    {
      label: "Difficulty",
      name: "difficulty",
      field: (row) => row.difficulty,
      align: "left",
    },
    {
      label: "Status",
      name: "isDraft",
      field: (row) => (row.isDraft ? "Draft" : "Confirmed"),
      align: "left",
    },

    {
      name: "actions",
      align: "right",
    },
  ],
});

export default chords;

async function getList(props) {
  try {
    // console.log(props?.pagination);
    const { q, route, router } = v;
    let params = {
      page: chords.pagination.page,
      limit: chords.pagination.rowsPerPage,
    };
    if (props?.pagination) {
      params.page = props.pagination.page;
      params.limit = props.pagination.rowsPerPage;
      // if (props.pagination.search) params.search = props.pagination.search;
      if (props.pagination.search)
        params[`difficulty[eq]`] = props.pagination.search;

      console.log(params);
    }
    const res = await api.get(`song/${v.route.params.songId}/chord`, {
      params,
    });
    chords.list = res.data.data;
    chords.pagination.rowsNumber = res.data.total;
  } catch (error) {
    console.error(error.message);
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

async function onSubmit() {
  try {
    const { q, route, router } = v;
    const { detail } = chords;

    const url = detail._id
      ? `${BASEPATH}/${detail._id}`
      : `song/${route.params.songId}/chord`;
    const method = detail._id ? "put" : "post";

    const res = await api[method](url, detail);
    router.push({
      name: "song-chords",
      params: {
        songId: route.params.songId,
      },
    });
  } catch (error) {
    Notify.create(error.response?.data?.message ?? "Server error");
    console.error(error.message);
  }
}

async function getDetail() {
  const { q, route, router } = v;
  try {
    q.loading.show();
    const res = await api.get(`${BASEPATH}/${route.params.id}`);
    chords.detail = res.data;
    q.loading.hide();
  } catch (error) {
    q.loading.hide();
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}
