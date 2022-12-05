import axios from "axios";

export default {
  namespaced: true,
  state: {
    cities: [],
  },
  getters: {
    getCities: (state) => state.cities,
  },
  mutations: {
    SET_LIST_CITIES(state, payload) {
      state.cities = payload;
    },
  },
  actions: {
    async fetchListCities({ commit }) {
      try {
        const res = await axios.get(
          `https://provinces.open-api.vn/api/?depth=1`
        );
        commit("SET_LIST_CITIES", res.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
