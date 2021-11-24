export default async function ({
  route,
  redirect,
  store,
  app
}) {


  if (route.path !== '/') {
    //we are on a protected route
    if (!store.state.auth.user) {
      console.log(store.user)
      //take them to sign in page
      return redirect('/')
    }
  } else if (route.path === '/') {
    if (!store.state.auth.user) {
      //leave them on the sign in page
    } else {
      return redirect('/private/account')
    }
  }
}
