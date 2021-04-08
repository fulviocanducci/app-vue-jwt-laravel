import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: window.localStorage.getItem("@token"),
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
      window.localStorage.setItem("@token", value);
    },
    removeToken(state) {
      state.token = null;
      window.localStorage.removeItem("@token");
    },
    getToken(state) {
      return state.token;
    },
  },
  getters: {
    authentication: (state) => {
      state.token = window.localStorage.getItem("@token");
      console.log(state.token);
      return state.token?.length > 0;
    },
  },
});

export { store };
