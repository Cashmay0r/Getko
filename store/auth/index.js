import Cookie from "js-cookie";

const actions = {
  async login({ commit }, account) {
    try {
      // Returns a cookie with JWT and data containing email and uid
      const cookie = await this.$axios.post("/api/login", account);
      if (cookie.status == 200) {
        console.log("User successfully logged in");
      }
      commit("SET_USER", {
        email: cookie.data.email,
        uid: cookie.data.uid,
        access_token: cookie.data.access_token,
        refresh_token: cookie.data.refresh_token,
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
      commit("SET_USER", null);

      this.$router.push({
        path: "/",
      });
    } catch {
      console.log("Something went wrong");
    }
  },
  async register({ commit }, account) {
    try {
      // Returns a cookie with JWT and data containing email and uid
      const registerUser = await this.$axios.post("/api/register", account);
      commit("SET_USER", {
        email: registerUser.data.email,
        uid: registerUser.data.uid,
        access_token: registerUser.data.access_token,
        refresh_token: registerUser.data.refresh_token,
      });
      this.$router.push({
        path: "/private/account",
      });
    } catch {
      console.log("Unable to create account");
    }
  },
};

const mutations = {
  SET_USER(state, user) {
    console.log(user);
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
