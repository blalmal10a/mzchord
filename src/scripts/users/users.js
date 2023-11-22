import { api } from "src/boot/axios";
import { reactive } from "vue";
import v from "../v";

const BASEPATH = "users";
const users = reactive({
  list: [],
  detail: {
    _id: null,
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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
      label: "Name",
      name: "name",
      field: (row) => row.name,
      align: "left",
    },
    {
      label: "Email",
      name: "email",
      field: (row) => row.email,
      align: "left",
    },

    {
      label: "Role",
      name: "role",
      field: (row) => row.role,
      align: "left",
    },
    // {
    //   label: "Status",
    //   name: "isDraft",
    //   field: (row) => (row.isDraft ? "Draft" : "Confirmed"),
    //   align: "left",
    // },

    {
      name: "actions",
      align: "right",
    },
  ],
});

export default users;

async function getList(props) {
  try {
    let params = {
      limit: users.pagination.rowsPerPage,
      page: users.pagination.page,
    };
    if (props?.pagination) {
      params.limit = props.pagination.rowsPerPage;
      params.page = props.pagination.page;
      if (props.pagination.search) params.search = props.pagination.search;
    }
    const res = await api.get(BASEPATH, {
      params,
    });
    users.list = res.data.data;
    users.pagination.rowsNumber = res.data.total;
  } catch (error) {
    console.error(error.message);
  }
}

async function onSubmit() {
  try {
    const { q, route, router } = v;
    const { detail } = users;
    const url = detail._id ? `${BASEPATH}/${detail._id}` : BASEPATH;
    const method = detail._id ? "put" : "post";

    const res = await api[method](url, detail);
    router.push({ name: "users" });
  } catch (error) {
    console.error(error.message);
  }
}

async function getDetail() {
  const { q, route, router } = v;
  try {
    q.loading.show();
    const res = await api.get(`${BASEPATH}/${route.params.id}`);
    users.detail = res.data;
    q.loading.hide();
  } catch (error) {
    q.loading.hide();
  }
}
