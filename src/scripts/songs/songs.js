import { api } from "src/boot/axios";
import { reactive } from "vue";
import v from "../v";
import artists from "../artists/artists";

const BASEPATH = "songs";
const songs = reactive({
  list: [],
  detail: {
    _id: null,
    title: "",
    artist: null,
    featuring: null,
    lyric: "",
  },

  pagination: {
    rowsNumber: 0,
    search: "",
    rowsPerPage: 15,
  },
  getList: getList,
  getDetail: getDetail,
  onSubmit: onSubmit,
  search_artist: onFilterArtist,
  columns: [
    {
      label: "Title",
      name: "title",
      field: (row) => row.title,
      align: "left",
    },
    {
      label: "Artist",
      name: "artist",
      field: (row) => row.artist?.name ?? "N/A",
      align: "left",
    },
    {
      name: "actions",
      align: "right",
    },
  ],
});

export default songs;

async function getList(props) {
  try {
    let params = {
      limit: songs.pagination.rowsPerPage,
      page: songs.pagination.page,
    };
    if (props?.pagination) {
      params.limit = props.pagination.rowsPerPage;
      params.page = props.pagination.page;
    }
    if (songs.pagination.search) {
      params.search = songs.pagination.search;
    }
    const res = await api.get(BASEPATH, {
      params,
    });
    songs.list = res.data.data;
    songs.pagination.rowsNumber = res.data.total;
  } catch (error) {
    console.error(error.message);
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

async function onSubmit() {
  try {
    const { q, route, router } = v;
    const { detail } = songs;
    const url = detail._id ? `${BASEPATH}/${detail._id}` : BASEPATH;
    const method = detail._id ? "put" : "post";
    const res = await api[method](url, detail);
    router.push({ name: "songs" });
  } catch (error) {
    console.error(error.message);
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

async function getDetail(ev, id) {
  const { q, route, router } = v;
  try {
    q.loading.show();
    const res = await api.get(`${BASEPATH}/${id ?? route.params.id}`);
    songs.detail = res.data;
    // songs.other_details = res.data;
    q.loading.hide();
  } catch (error) {
    q.loading.hide();
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

async function onFilterArtist(data, update) {
  update(() => {
    try {
      if (data.length < 2) {
        artists.getList();
      } else {
        artists.getList({
          pagination: {
            limit: 20,
            search: data,
          },
        });
      }
    } catch (error) {
      Notify.create(error.response?.data?.message ?? "Server error");
    }
  });
}
