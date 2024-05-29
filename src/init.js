import Vuelidate from "@vuelidate/core";

import "bootstrap/dist/css/bootstrap.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import router from "./router";
import store from "./store";

export default function init(app) {
  app.use(router);
  app.use(store);
  app.use(Vuelidate);

  app.use(VueSweetalert2);
}
