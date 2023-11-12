import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { auth } from "src/scripts/auth-helper";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach(async (to, from, next) => {
    if (!auth.state || !auth.user?._id) {
      await auth.getUser();
    }

    if (to.meta.unguarded) {
      if (auth.state && auth.user?._id)
        next({
          name: "dashboard",
        });
      else next();
    } else {
      if (auth.state && auth.user?._id) {
        if (auth.user.role == "admin") {
          next();
        } else {
          const redirect =
            process.env.NODE_ENV == "development" ? "/unauthorized" : "/";
          window.location = redirect;
        }
      } else next({ name: "login" });
    }

    return;
    if (to.meta.unguarded) {
      //auth pages
      //token a awma a, state a false chuan, request ang
      // if (token && auth.state) {
      //   //token a awm a, state a true chuan, home page ah redirect
      //   next("/");
      // } else if (token) {
      //   //token awma, state false
      //   const status = await auth.getUser();
      //   if (auth.state) {
      //     next("/");
      //     return;
      //   }
      //   //401 chuan token remove tur
      //   // if(status ==401) localStorage.removeItem('token')
      //   next();
      // } else {
      //   //token awm lo va, state pawh false
      //   next();
      // }
    } else {
      if (!token) {
        next({ name: "login" });
      } else if (!auth.state) {
        const status = await auth.getUser();
        if (auth.state) {
          next();
          return;
        }

        if (status == 401) {
          // localStorage.removeItem('token')
        }
        next({ name: "login" });

        //token a awma sate false chuan user get ang
      } else {
        //token awma, state bawk chuan next theih
        next();
      }
      console.log("here");
      //token a awm loh chuan login page ah kal nghal tur
      //token a awma, state false chuan /me a request anga, error response a awm chuan, token a remove anga, auth page ah a kal ang
      //error response a awm loh chuan token a remove lo ang
    }
    // next();
  });

  return Router;
});

// if (token) {
// } else {
//   next({ name: "login" });
// }
