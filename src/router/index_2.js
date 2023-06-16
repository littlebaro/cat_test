routes : [
    
    ...Object
        .keys(pages.public)
        .map(a => ({
            name: a,
            path: a,
            component: pages.public[a],
            meta: {
                allowAnonymous: true
            }
        })),  
        {
        path: "",
        component: () => import ("@/layouts/default"),
        children: [

            // b 的  mickey80
            ...Object
                .keys(pages.private)
                .map(b => ({name: b, path: b, component: pages.private[b]})),
            ...Object
                .keys(pages.shared)
                .map(b => ({
                    name: b,
                    path: b,
                    component: pages.shared[b],
                    meta: {
                        noPermission: true
                    }
                })), {
                name: '404',
                path: "/:catchAll(.*)",
                component: () => import ("@/views/404"),
                meta: {
                    noPermission: true
                }
            }
        ]
    }

]