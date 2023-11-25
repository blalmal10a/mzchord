import { api } from "src/boot/axios";
import { reactive } from "vue";
import v from "../v";
import { Notify } from "quasar";

const BASEPATH = "artists";
const artists = reactive({
  list: [],
  detail: {
    _id: null,
    name: "",
    sex: "Male",
    pic: null,
    isDraft: true,
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
    ],
  },

  pagination: {
    limit: 15,
    rowsNumber: 0,
  },
  getList: getList,
  getDetail: getDetail,
  onSubmit: onSubmit,
  onFilterArtists,
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

export default artists;

async function getList(props) {
  try {
    let params = {
      limit: artists.pagination.limit,
      page: artists.pagination.page,
    };
    if (props?.pagination) {
      params.limit = props.pagination.rowsPerPage;
      params.page = props.pagination.page;
      if (props.pagination?.search) params.search = props.pagination.search;
    }

    const res = await api.get(BASEPATH, {
      params,
    });
    artists.list = res.data.data;
    artists.pagination.rowsNumber = res.data.total;
  } catch (error) {
    console.error(error.message);
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

async function onSubmit() {
  try {
    const { q, route, router } = v;
    const { detail } = artists;
    const url = detail._id ? `${BASEPATH}/${detail._id}` : BASEPATH;
    const method = detail._id ? "put" : "post";
    detail.socials.forEach((social, i) => {
      if (!social.link) social.link = "N/A";
    });

    const res = await api[method](url, detail);
    router.push({ name: "artists" });
  } catch (error) {
    console.error(error.message);
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

async function getDetail() {
  const { q, route, router } = v;
  try {
    q.loading.show();
    const res = await api.get(`${BASEPATH}/${route.params.id}`);
    artists.detail = res.data;
    q.loading.hide();
  } catch (error) {
    q.loading.hide();
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

async function onFilterArtists(data, update) {
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
