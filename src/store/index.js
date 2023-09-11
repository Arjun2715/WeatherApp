// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    storedStrings: ["Madrid",], // Initialize with an empty array
  },
  mutations: {
    SET_STORED_STRINGS(state, strings) {
      state.storedStrings = strings;
    },
    ADD_STRING(state, newString) {
      state.storedStrings.push(newString);
      // Save the updated array to LocalStorage
      localStorage.setItem('storedStrings', JSON.stringify(state.storedStrings));
    },
    REMOVE_STRING(state, index) {
      state.storedStrings.splice(index, 1);
      // Save the updated array to LocalStorage
      localStorage.setItem('storedStrings', JSON.stringify(state.storedStrings));
    },
  },
  actions: {
    initializeStoredStrings({ commit }) {
      // Load the array of strings from LocalStorage during initialization
      const storedStrings = localStorage.getItem('storedStrings');
      if (storedStrings) {
        commit('SET_STORED_STRINGS', JSON.parse(storedStrings));
      }
    },
  },
  getters: {
    getStoredStrings: (state) => state.storedStrings,
  },
});
