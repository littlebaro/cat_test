import { createRouter, createWebHashHistory } from "vue-router";
//import { routes } from "./routesItem.js" 
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { setupRoutePermission } from "./permission.js"

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
    history:  createWebHashHistory(),
    routes, 
    scrollBehavior () {
        return { top: 0 }
    }
});


export async function setupRouter(AppInstance) {
    AppInstance.use(router);
    setupRoutePermission(router);
}