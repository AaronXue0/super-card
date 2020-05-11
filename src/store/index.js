import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { signin } from "@/api/User/signin.js";
import { signout } from "@/api/User/signout.js";
import { retriveCards } from "@/api/Card/retriveCards.js";
import { userRegister } from "@/api/User/userRegister.js";

export default new Vuex.Store({
  state: {
    drawer: false,
    user: null,
    error: null,
    login: false,
    cards: null,
    isAdmin: false,
    loading: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      let adminList = ["t107590017@ntut.org.tw", "ntutsuse15@gmail.com"];
      if (adminList.includes(payload.email)) state.isAdmin = true;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLogin(state, payload) {
      state.login = payload;
    },
    setCards(state, payload) {
      state.cards = payload;
    },
    setDrawer(state, val) {
      state.drawer = val;
    },
    setNTUT(state, val) {
      state.isntut = val;
    },
    setLoading(state, val) {
      state.loading = val;
    }
  },
  actions: {
    userSignIn() {
      signin();
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", payload);
      commit("setLogin", true);
      userRegister();
    },
    setCardsAction() {
      retriveCards();
    },
    userSignOut({ commit }) {
      signout();
      commit("setUser", null);
    }
  },
  getters: {}
});
