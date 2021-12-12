export default async function ({route, redirect, store}) {
  let user = store.state.authentication.loggedIn;

  if (route.path !== '/') {
    //we are on a protected route
    if (!user) {
      //take them to sign in page
      return redirect('/');
    }
  }
}
