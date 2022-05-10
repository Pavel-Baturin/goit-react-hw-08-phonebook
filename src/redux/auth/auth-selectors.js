const getUserEmail = state => state.auth.user.email;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingUser = state => state.auth.isFetchingUser;

export { getUserEmail, getIsLoggedIn, getIsFetchingUser };
