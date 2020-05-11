import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import config from "./firebaseConfig.js";

Vue.config.productionTip = false;

firebase.initializeApp(config);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    store.commit("setLoading", true);
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      } else {
        store.commit("setLoading", false);
      }
    });
  }
}).$mount("#app");
