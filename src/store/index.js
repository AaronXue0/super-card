import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { signin } from "@/api/signin.js";
import { signout } from "@/api/signout.js";
import { retriveCards } from "@/api/retriveCards.js";
import { userRegister } from "@/api/userRegister.js";

export default new Vuex.Store({
  state: {
    drawer: false,
    user: null,
    error: null,
    login: false,
    cards: null,
    isAdmin: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      let adminList = ["t107590017@ntut.org.tw"];
      if (adminList.includes(payload.email)) state.isAdmin = true;
      console.log(state.isAdmin);
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
      location.reload();
    }
  },
  getters: {}
});
