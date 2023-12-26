import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router.js";
import components from "@/components/UI/";

let app = createApp(App);
components.forEach(component=>{
    app.component(component.name, component)
})
app
    .use(router)
    .mount("#app");
