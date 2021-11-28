import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";

export const actions = {
  async nuxtServerInit({ store, commit }, { req }) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    const parsed = cookieparser.parse(req.headers.cookie);
    const accessTokenCookie = parsed.access_token;

    if (!accessTokenCookie) return;

    const decoded = JWTDecode(accessTokenCookie);

    if (decoded) {
      commit("auth/SET_USER", {
        uid: decoded.user_id,
        email: decoded.email,
        access_token: parsed.access_token,
        refresh_token: parsed.refresh_token,
      });
    }
  },
};
