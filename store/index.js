/* import JWTDecode from "jwt-decode";
import cookieparser, { parse } from "cookieparser";
//dotenv.config();

export const actions = {
  async nuxtServerInit({ store, commit, router, app }, { req }) {
    console.log("Nuxt server init");
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;
    const baseUrl = "http://localhost:3000";
    const parsed = cookieparser.parse(req.headers.cookie);
    const accessTokenCookie = parsed.access_token;
    const refreshToken = parsed.refresh_token;

    // If no access_token, send refresh token and get a new access_token + new refresh_token
    /* if (!accessTokenCookie) {
      // Send refresh token, verify token, receive a new cookie with the token
      if (!refreshToken) {
        // No access or refresh token
        router.push({
          path: "/",
        });
        commit("auth/SET_USER", null);
      } else {
        // Send refresh token
        const data = {
          refresh_token: refreshToken,
        };
        try {
          const newToken = await this.$axios.post(
            `${baseUrl}/api/refresh-token`,
            data
          );

          //Set cookies
          const cookieCheck = this.$cookies.get("access_token");
          console.log("Cookie Check", cookieCheck);
          if (!cookieCheck) {
            this.$cookies.removeAll();
            console.log("Setting access cookie");
            this.$cookies.set("access_token", newToken.data.access_token, {
              httpOnly: true,
              maxAge: 15 * 60,
              secure: process.env.NODE_ENV === "production" ? true : false,
            });
            console.log("Setting refresh cookie");
            this.$cookies.set("refresh_token", newToken.data.refresh_token, {
              httpOnly: true,
              maxAge: 24 * 60 * 60,
              secure: process.env.NODE_ENV === "production" ? true : false,
            });
          }
          console.log(newToken.data);
          commit("auth/SET_USER", {
            uid: newToken.data.uid,
            email: newToken.data.email,
            access_token: newToken.data.access_token,
            refresh_token: newToken.data.refresh_token,
          });
        } catch {
          console.error("Unable to generate a new token");
        }
      }
      // Check for cookie again
    } else {
      // Verify
      const decoded = JWTDecode(accessTokenCookie);
      if (decoded) {
        commit("auth/SET_USER", {
          uid: decoded.user_id,
          email: decoded.email,
          access_token: accessTokenCookie,
          refresh_token: refreshToken,
        });
      }
    } 
    // If no refresh_token, user cannot access content and has to login or register account
  },
};*/
