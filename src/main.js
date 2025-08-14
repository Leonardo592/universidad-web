import { createApp } from "vue";
import { createPinia } from "pinia"; // ✅ Importamos Pinia
import App from "./App.vue";
import router from "./router"; // ✅ Importación correcta
import "./style.css";

const app = createApp(App);

app.use(createPinia()); // ✅ Usamos Pinia
app.use(router); // ✅ Usamos Vue Router

app.mount("#app");
