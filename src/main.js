import { createApp } from "vue";
import App from "./App.vue";

//import router
import router from "./router";

//import bootstrap popper.js jquery
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";

const app = createApp(App);

//use vue render
app.use(router);

app.mount("#app");