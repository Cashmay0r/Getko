export const actions = {
  async nuxtServerInit({store, commit, router, app}, {req}) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;
    const baseUrl = 'http://localhost:3000';
    // Verify cookie with backend and get user data

    if (this.$auth.strategy.token.status().valid()) {
      //const access_token = this.$auth.strategy.token.get();
      //console.log("Access token2 ", access_token);
      const access_token = this.$cookies.get('auth._token.local');

      try {
        const user = await this.$axios.post(baseUrl + '/api/user', {
          headers: {Authorization: `${access_token}`},
        });

        // Set user state with user data
        this.$auth.setUser(user.data);
      } catch {
        console.error('Unable to fetch user data');
      }
    } else {
      console.log('Access Token is invalid, needs to be refreshed');
      const refresh_token = this.$cookies.get('refresh_token');

      if (refresh_token) {
        const token = await this.$axios.post(baseUrl + '/api/refresh-token', {
          headers: {Authorization: `Bearer ${refresh_token}`},
        });
        const access_token = token.data.access_token;
        if (access_token) {
          console.log('Here');
          const user = await this.$axios.post(baseUrl + '/api/user', {
            headers: {Authorization: `Bearer ${access_token}`},
          });
          // Set user state with user data
          this.$auth.setUser(user.data);
          this.$auth.strategy.token.set(access_token);
          console.log('Access token has been refreshed');

          //console.error("Unable to fetch user data");
        }
      }
    }
  },
};
