import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isToggleActive: false
  },
  mutations: {
    activateToggle(state) {
      state.isToggleActive = true
    }
  }
})