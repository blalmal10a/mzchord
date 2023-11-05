import { api } from "src/boot/axios";

import showConfirmDeleteDialog from "./show-confirm-delete-dialog";
import { reactive } from "vue";

const r3 = reactive({
  data: {
    _id: null,
  },
  endpoint: "",
  loadingDelete: false,
});

export default r3;
