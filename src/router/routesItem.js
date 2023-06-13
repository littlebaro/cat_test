//import home from "@/components/home.vue" 

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
              component: () => import("@/components/homeInfo.vue") 
            },
            {
              path: "Aircle",
              name: "Aircle",
              component: () => import("@/components/Aircle.vue")
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
    component: () => import("@/layout/errorPageLayout.vue"),
    children: [
      {
        path: "IdentityDenyView",
        name: "IdentityDenyView",
        component: () => import("@/views/IdentityDenyView.vue")
      },
      {
        path: ":pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/PageNotFound.vue")
      },
    ],
  }
]