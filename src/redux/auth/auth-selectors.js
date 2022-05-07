const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

export { getUserEmail, getIsLoggedIn };
