import jwtDecode from "jwt-decode"
import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit({
      commit
    }, {
      req
    },

  ) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    const parsed = cookieparser.parse(req.headers.cookie);
    const accessTokenCookie = parsed.access_token;

    if (!accessTokenCookie) return;

    const decoded = jwtDecode(accessTokenCookie);

    if (decoded) {
      commit('users/set_user', {

        uid: decoded.user_id,
        email: decoded.email
      })
      console.log(decoded)
      console.log('Cookie decoded')
    }

  }
}
