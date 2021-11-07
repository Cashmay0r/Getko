import Cookie from 'js-cookie'
import '@/services/firebase'
import {
  getAuth,
  signInWithEmailAndPassword,
  getIdToken
} from 'firebase/auth'

const state = () => ({
  user: null
})

export const mutations = {
  set_user: (state, loginDetails) => {
    state.user = loginDetails
  }
}

export const actions = {
  async login({
    commit
  }, loginDetails) {
    // TODO: Can do validation
    try {
      console.log('Attempting to log in...')
      // Login the user

      const auth = getAuth()
      await signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password);


      // Get a JWT from firebase
      const token = await auth.currentUser.getIdToken(auth.currentUser, true);
      console.log('User Token => ', token)

      const {
        email,
        uid
      } = auth.currentUser


      // Make a cookie from the JWT
      Cookie.set('access_token', token);

      // Set user locally

      commit('set_user', {
        email,
        uid
      })

    } catch (error) {
      throw error;
    }




  },
}
