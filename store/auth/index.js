import Cookie from 'js-cookie'

const actions = {
  async login({
    app,
    commit,
    state
  }, account) {

    try {
      const auth = this.$fire.auth

      const login = await auth.signInWithEmailAndPassword(account.email, account.password)
      console.log(login.user)


      if (login) {
        const token = await auth.currentUser.getIdToken(auth.currentUser, true)

        console.log('Token => ', token)
        console.log(auth.currentUser)
        const {
          email,
          uid
        } = auth.currentUser
        console.log('Email + UID => ', email, uid)

        Cookie.set('access_token', token)

        commit('SET_USER', {
          email,
          uid
        })


        this.$router.push({
          path: '/private'
        })
      } else {
        console.log('user could not login')
      }
    } catch {
      console.log('Try-catch did not work?')
    }


  },
  async logout({
    commit

  }) {

    const auth = this.$fire.auth

    try {

      const logout = await auth.signOut()
      console.log(auth.currentUser)
      if (!auth.currentUser) {
        Cookie.remove('access_token')

        commit('SET_USER', null)

        this.$router.push({
          path: '/'
        })
      } else {

      }

    } catch {

    }
  }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

const state = () => ({
  user: null,
})

export default {
  state,
  actions,
  mutations,
}
