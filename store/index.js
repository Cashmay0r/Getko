export const actions = {
  async nuxtServerInit({store, commit}, {req, res}) {
    if (process.server && process.static) return;
    const baseUrl = 'http://localhost:3000';
    // Verify cookie with backend and get user data
    const access_cookie = this.$cookies.get('access_token');
    if (access_cookie) {
      try {
        const user = await this.$axios.post(baseUrl + '/api/user', {
          headers: {Authorization: `${access_cookie}`},
        });
        // Set user state with user data
        commit('authentication/SET_USER', user.data);
      } catch {
        //console.error('Unable to fetch user data');
      }
    } else {
      console.log('Access Token is invalid, needs to be refreshed');
      const refresh_cookie = this.$cookies.get('refresh_token');
      if (refresh_cookie) {
        const token = await this.$axios.post(baseUrl + '/api/refresh-token', {
          headers: {Authorization: `Bearer ${refresh_cookie}`},
        });
        const access_token = token.data.access_token;
        if (access_token) {
          console.log('Get new access_token');
          // Set new access_token cookie
          this.$cookies.set('access_token', access_token, {
            maxAge: 60 * 15 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production' ? true : false,
            path: '/',
          });
          // Find user and set their state
          const user = await this.$axios.post(baseUrl + '/api/user', {
            headers: {Authorization: `${access_token}`},
          });
          // Set user state
          commit('authentication/SET_USER', user.data);

          console.log('Access token has been refreshed');
        }
      } else {
        console.log('There is no refresh cookie');
        commit('authentication/SET_USER', null);
        return;
      }
    }
  },
};
