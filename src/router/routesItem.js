export const routes = [
  {
      path: "/",
      component: () => import("@/layout/defaultLayout.vue"),
      children: [ 
        {
          path: "",
          component: () => import("@/pages/homePages.vue"),
          children: [
            { 
              path: "", 
              name: "homeInfo", 
              component: () => import("@/components/homeInfo.vue"),
            },
            {
              path: "Aircle",
              name: "Aircle",
              component: () => import("@/components/Aircle.vue"),
            },
            {
              path: "About",
              name: "About",
              component: () => import("@/components/About.vue"),
            },
          ]
        }, 
        {
          path: "loginPages",
          name: "loginPages",
          meta: {
            requiresAuth: true
          },
          component: () => import("@/pages/loginPages.vue")
        },
        {
          path: "userGuide",
          name: "userGuide",
          component: () => import("@/pages/userGuide.vue")
        },
      ],
  }, 
  {
    path: "/",
    //component: () => import("@/layout/errorPageLayout.vue"),
    component: () => import("@/layout/defaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/homePages.vue"),
        children: [
          {
            path: ":pathMatch(.*)*",
            name: "NotFound",
            component: () => import("@/pages/404Pages.vue"),
          },
        ]
      },
    ],
  }
]