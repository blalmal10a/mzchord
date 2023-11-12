import { Notify } from "quasar";
import axios, { api } from "src/boot/axios";
import v from "src/scripts/v";
import { computed, reactive, ref } from "vue";

const auth = reactive({
  user: {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  },
  loadingLogin: false,
  state: false,
  login: login,
  getUser: getUser,
  logout: logout,
  register: onRegister,
});

async function logout() {
  try {
    const res = await api.post("auth/logout");
    auth.state = false;
    auth.user = {
      name: "",
      email: "",
      password: "",
    };
    v.router.push({ name: "login" });
    // if (!auth.state) v.router.push({ name: "login" });
  } catch (error) {
    v.router.push({ name: "login" });
    console.error(error.message);
  }

  // v.router.push({ name: "login" });
}

async function getUser() {
  try {
    const res = await api.get("auth/me", {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    });
    auth.user = res.data;
    auth.state = true;
    return res.data;
  } catch (error) {
    return true;
    // console.error(error.message);
    // // if (v.router && error.response && error.response.status == 401)
    // //   v.router.push({ name: "login" });
    // else return error.response.status;
  }
}
async function login() {
  try {
    auth.loadingLogin = true;
    await api.post("auth/login", {
      ...auth.user,
    });

    // const res = await api.get("auth/me");
    // auth.user = res.data;

    auth.state = true;
    v.router.push("/");
    auth.loadingLogin = false;
  } catch (error) {
    console.error(error.message);
    auth.loadingLogin = false;
    auth.state = false;
    Notify.create(error.response?.data?.message ?? error.message);
    // console.log("q is: ", q);
    // q.notify(error.response?.data?.message ?? error.message);
  }
}

async function confirmEmail() {
  try {
    api.post(`auth/confirm-email`);
  } catch (error) {}
}

async function onRegister() {
  try {
    auth.loadingLogin = true;
    const res = await api.post(`auth/register`, auth.user);
    v.router.push({ name: "login" });
    auth.loadingLogin = false;
  } catch (error) {
    auth.loadingLogin = false;

    v.router.push({ name: "login" });
    console.error(error.message);
    Notify.create(error.response?.data?.message ?? error.message);
  }
}
export { auth };
