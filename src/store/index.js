import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { signin } from "@/api/signin.js";

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    login: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLogin(state, payload) {
      state.login = payload;
    }
  },
  actions: {
    userSignIn() {
      signin();
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", payload);
      commit("setLogin", true);
    },
    setLogin(result) {
      this.$store.commit("setUser", result);
      this.$store.commit("setLogin", true);
      this.$store.commit("setError", null);
    }
  },
  getters: {}
});
