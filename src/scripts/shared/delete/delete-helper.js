import { api } from "src/boot/axios";
import r3 from "../r3";
import showConfirmDeleteDialog from "../show-confirm-delete-dialog";
import { Notify } from "quasar";

async function onConfirmDelete() {
  try {
    r3.loadingDelete = true;
    const { data } = r3;
    const res = await api.delete(`${r3.endpoint}/${data._id}`);
    showConfirmDeleteDialog.value = false;
    r3.loadingDelete = false;
  } catch (error) {
    r3.loadingDelete = false;
    console.error(error.message);
    Notify.create(error.response?.data?.message ?? "Server error");
  }
}

export { onConfirmDelete };
