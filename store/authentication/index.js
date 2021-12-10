export const actions = {
  async login({commit}, account) {
    try {
      // Returns a cookie with JWT and data containing email and uid
      const tokens = await this.$axios.post('/api/login', account);
      console.log(tokens);
      const access_token = tokens.data.access_token;
      // Login with newly created account
      await this.$auth.loginWith('local', {data: account});
      await this.$auth.strategy.token.set(access_token);
      //await this.$auth.setUserToken(access_token);
    } catch {
      console.log('Unable to Log user in');
    }
  },
  async register({commit}, account) {
    try {
      // Returns a cookie with JWT and data containing email and uid
      await this.$axios.post('/api/register', account);
      // Login with newly created account
      await this.$auth.loginWith('local', {data: account});
    } catch {
      console.log('Unable to create account');
    }
  },
};
