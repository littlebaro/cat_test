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
              component: () => import("@/pages/homeInfo.vue"),
            },
            {
              path: "Article",
              name: "Article",
              component: () => import("@/pages/Article.vue"),
            },
          ]
        }, 
        {
          path: "loginPages",
          name: "loginPages",
          meta: {
            requiresAuth: false
          },
          component: () => import("@/pages/loginPages.vue")
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
            component: () => import("@/pages/[...404Pages].vue"),
          },
        ]
      },
    ],
  }
]