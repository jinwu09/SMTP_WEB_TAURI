import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import "./assets/style.css";

const app = createApp(App);
axios.defaults.baseURL = "http://localhost:3000/";
app.config.globalProperties.$http = axios;
app.mount("#app");
