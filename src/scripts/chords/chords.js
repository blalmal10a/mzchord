import { api } from "src/boot/axios";
import { reactive } from "vue";
import v from "../v";

const BASEPATH = "song";
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
    rowsNumber: 0,
  },
  getList: getList,
  getDetail: getDetail,
  onSubmit: onSubmit,
  columns: [
    {
      label: "Name",
      name: "name",
      field: (row) => row.name,
      align: "left",
    },
    {
      label: "Gender",
      name: "sex",
      field: (row) => row.sex,
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
    const { q, route, router } = v;

    if (props?.pagination) {
      songs.pagination = props.pagination;
    }
    const res = await api.get(`song/${v.route.params.songId}/chord`, {
      params: {
        limit: chords.pagination.rowsPerPage,
      },
    });
    chords.list = res.data.data;
    chords.pagination.rowsNumber = res.data.total;
  } catch (error) {
    console.error(error.message);
  }
}

async function onSubmit() {
  try {
    const { q, route, router } = v;
    const { detail } = chords;

    const url = detail._id
      ? `${BASEPATH}/${route.params.songId}/chord/${detail._id}`
      : `${BASEPATH}/${route.params.songId}/chord`;
    const method = detail._id ? "put" : "post";

    // for await (let i of Object.keys(detail.socials)) {
    //   const social = detail.socials[i];

    //   if (!social.link) detail.socials.splice(i, 1);
    // }

    const res = await api[method](url, detail);
    router.push({ name: "chords" });
  } catch (error) {
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
  }
}
