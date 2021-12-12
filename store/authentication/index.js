export const actions = {
  async login({state, commit}, account) {
    try {
      // Returns a cookie with JWT and data containing email and uid
      const login = await this.$axios.post('/api/login', account);
      // Set cookies with tokens
      if (login.status === 200) {
        const access_token = login.data.access_token;
        // Get user state
        if (access_token) {
          const user = await this.$axios.post('/api/user', {
            headers: {Authorization: `${access_token}`},
          });
          commit('SET_USER', user.data);
          this.$router.push('/store/home');
        }
      }
    } catch {
      console.log('Unable to Log user in');
    }
  },
  async register({state, commit}, account) {
    try {
      // Returns a cookie with JWT and data containing email and uid
      const register = await this.$axios.post('/api/register', account);
      const access_token = register.data.access_token;
      // Get user state
      const user = await this.$axios.post('/api/user', {
        headers: {Authorization: `${access_token}`},
      });

      commit('SET_USER', user.data);
      this.$router.push('/store/home');
    } catch {
      console.log('Unable to create account');
    }
  },
  async logout({state, commit}) {
    try {
      console.log('Attempting to remove all cookies');
      const logout = await this.$axios.post('/api/logout', {withCredentials: true});
      if (logout) {
        commit('SET_USER', null);
        this.$router.push('/');
      }
    } catch {
      console.log('Could not logout');
    }
  },
};
export const state = () => ({
  user: null,
  loggedIn: false,
});
export const mutations = {
  SET_USER(state, user) {
    if (user) {
      state.user = user;
      state.loggedIn = true;
    } else {
      state.loggedIn = false;
    }
  },
};
