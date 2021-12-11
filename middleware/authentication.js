export default async function ({route, redirect, store, $auth}) {
  let user = $auth.user;

  if (route.path !== '/') {
    //we are on a protected route
    if (!user) {
      //take them to sign in page
      return redirect('/');
    }
  }
}
