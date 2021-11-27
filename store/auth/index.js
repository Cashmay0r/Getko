import Cookie from "js-cookie";

const actions = {
  async login({ app, commit, state }, account) {
    try {
      const cookie = await this.$axios.post("/api/login", account);
      console.log(cookie.data);

      commit("SET_USER", {
        email: cookie.data.email,
        uid: cookie.data.uid,
      });
      this.$router.push({
        path: "/private/account",
      });
    } catch {
      console.log("Unable to log in");
    }
  },
  async logout({ commit }) {
    try {
      // Need to make sure I have a header here at some point
      const clearCookie = await this.$axios.get("/api/logout");
      console.log(clearCookie.data);
      commit("SET_USER", null);

      this.$router.push({
        path: "/",
      });
    } catch {
      console.log("Something went wrong");
    }
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

const state = () => ({
  user: null,
});

export default {
  state,
  actions,
  mutations,
};
