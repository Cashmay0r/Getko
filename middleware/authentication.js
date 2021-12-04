export default async function ({ route, redirect, store, app }) {
  console.log("In custom middleware");
  if (route.path !== "/") {
    //we are on a protected route
    if (!app.$auth.loggedIn) {
      console.log(app.$auth.loggedIn);
      //take them to sign in page
      return redirect("/");
    }
  } else if (route.path === "/") {
    if (!app.$auth.loggedIn) {
      //leave them on the sign in page
    } else {
      return redirect("/private/account");
    }
  }
}
