import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupVeeValidator, setupSwal } from "@/plugins";
import { setupPinia } from "./stores";

import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

async function setupApp() {

    const AppInstance = createApp(App)

    setupVeeValidator(AppInstance)

    setupPinia(AppInstance)

    setupSwal(AppInstance)

    await setupRouter(AppInstance)

    AppInstance.mount("#app")
    
}

setupApp()
