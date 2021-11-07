export default function ({
  store,
  route,
  redirect
}) {
  const user = store.state.users.user;
  console.log('User in state', user)
  const blockedRoute = /\/private\/*/g;
  const homeRoute = '/';

  if (!user & route.path.match(blockedRoute)) {
    redirect('/login')
  }

  if (user && route.path === homeRoute) {
    redirect('/private')
  }
}
