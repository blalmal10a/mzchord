import { api } from "src/boot/axios";
import { reactive } from "vue";
import v from "../v";
import { Notify, date } from "quasar";
import artists from "../artists/artists";

const BASEPATH = "albums";

const albums = reactive({
  list: [],
  detail: {
    _id: null,
    title: "",
    thumbnail: "",
    releaseDate: "",
    artist: null,
  },

  pagination: {
    rowsPerPage: 15,
    rowsNumber: 0,
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
      label: "Release Date",
      name: "releaseDate",
      field: (row) => date.formatDate(row.releaseDate, "Do MMM, YYYY"),
      align: "left",
    },

    {
      name: "actions",
      align: "right",
    },
  ],
});

export default albums;

async function getList(props) {
  try {
    let params = {
      limit: albums.pagination.rowsPerPage,
      page: albums.pagination.page,
    };
    if (props?.pagination) {
      params.limit = props.pagination.rowsPerPage;
      params.page = props.pagination.page;
      if (props.pagination.search) params.search = props.pagination.search;
    }
    const res = await api.get(BASEPATH, {
      params,
    });
    albums.list = res.data.data;
    albums.pagination.rowsNumber = res.data.total;
  } catch (error) {
    console.error(error.message);
  }
}

async function onSubmit() {
  try {
    const { q, route, router } = v;
    const { detail } = albums;
    const url = detail._id ? `${BASEPATH}/${detail._id}` : BASEPATH;
    const method = detail._id ? "put" : "post";

    const res = await api[method](url, detail);
    router.push({ name: "albums" });
  } catch (error) {
    console.error(error.message);
  }
}

async function getDetail() {
  const { q, route, router } = v;
  try {
    q.loading.show();
    const res = await api.get(`${BASEPATH}/${route.params.id}`);
    albums.detail = res.data;
    q.loading.hide();
  } catch (error) {
    q.loading.hide();
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
      console.log(error.message);
      Notify.create(error.response?.data?.message ?? "Server error");
    }
  });
}
