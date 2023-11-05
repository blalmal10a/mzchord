import { api } from "src/boot/axios";
import { reactive } from "vue";
import v from "../v";

const BASEPATH = "artist";
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
    let params = { ...artists.pagination };
    if (props?.pagination) {
      params = {
        limit: props.pagination.rowsPerPage,
      };

      if (props.pagination?.search) params.search = props.pagination.search;
    }

    const res = await api.get(BASEPATH, {
      params,
    });
    artists.list = res.data.data;
    artists.pagination.rowsNumber = res.data.total;
  } catch (error) {
    console.error(error.message);
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
    // for await (let i of Object.keys(detail.socials)) {
    //   const social = detail.socials[i];

    //   if (!social.link) detail.socials.splice(i, 1);
    // }

    const res = await api[method](url, detail);
    router.push({ name: "artists" });
  } catch (error) {
    console.error(error.message);
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
  }
}
