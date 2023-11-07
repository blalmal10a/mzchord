const routes = [
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "home",
  //       meta: {
  //         unguarded: true,
  //       },
  //       component: () => import("pages/IndexPage.vue"),
  //     },
  //   ],
  // },
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/dashboard/DashboardPage.vue"),
      },
      {
        path: "songs",
        name: "songs",
        meta: {
          title: "Songs",
        },
        component: () => import("pages/songs/SongPage.vue"),
      },
      {
        path: "song-form/:id",
        name: "song-form",
        meta: {
          title: "Songs Form",
          hidden: true,
          ancestors: [
            {
              name: "songs",
              title: "Songs",
            },
          ],
        },
        component: () => import("pages/songs/SongForm.vue"),
      },
      {
        path: "song-detail/:id",
        name: "song-detail",
        meta: {
          title: "Songs",
          hidden: true,
        },
        component: () => import("pages/songs/SongForm.vue"),
      },
      //ARTISTS

      {
        path: "artists",
        name: "artists",
        meta: {
          title: "Artists",
        },
        component: () => import("pages/artists/ListPage.vue"),
      },
      {
        path: "artist-form/:id",
        name: "artist-form",
        meta: {
          title: "Artist Form",
          hidden: true,
          ancestors: [
            {
              name: "artists",
              title: "Artists",
            },
          ],
        },
        component: () => import("src/pages/artists/FormPage.vue"),
      },
      // {
      //   path: "artist-detail/:id",
      //   name: "artist-detail",
      //   meta: {
      //     title: "Artists",
      //     hidden: true,
      //   },
      //   component: () => import("pages/artists/FormPage.vue"),
      // },

      //CHORDs

      {
        path: "song-chords/:songId",
        name: "song-chords",
        meta: {
          title: "Chords",
          active: "songs",
          ancestors: [
            {
              name: "songs",
              title: "Songs",
            },
          ],
          hidden: true,
        },
        component: () => import("pages/chords/ListPage.vue"),
      },
      {
        path: "chord-form/:songId/:id",
        name: "chord-form",
        meta: {
          title: "Chords",
          hidden: true,
          active: "songs",
          ancestors: [
            {
              name: "songs",
              title: "Songs",
            },
          ],
        },
        component: () => import("src/pages/chords/FormPage.vue"),
      },
      // {
      //   path: "chord-detail/:id",
      //   name: "chord-detail",
      //   meta: {
      //     title: "Chords",
      //     hidden: true,
      //   },
      //   component: () => import("pages/chords/FormPage.vue"),
      // },

      {
        path: "users",
        name: "users",
        meta: {
          title: "Users",
        },
        component: () => import("pages/users/ListPage.vue"),
      },
      {
        path: "user-form/:id",
        name: "user-form",
        meta: {
          title: "User form",
          hidden: true,
          ancestors: [
            {
              name: "users",
              title: "Users",
            },
            // {
            //   name: "user-form",
            //   title: "User Form",
            // },
          ],
        },
        component: () => import("src/pages/users/FormPage.vue"),
      },
      // {
      //   path: "user-detail/:id",
      //   name: "user-detail",
      //   meta: {
      //     title: "User",
      //     hidden: true,
      //   },
      //   component: () => import("pages/users/FormPage.vue"),
      // },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        meta: {
          unguarded: true,
          hidden: true,
        },
        component: () => import("pages/auth/LoginPage.vue"),
      },

      {
        path: "register",
        name: "register",
        meta: {
          unguarded: true,
          hidden: true,
        },
        component: () => import("pages/auth/RegisterPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
