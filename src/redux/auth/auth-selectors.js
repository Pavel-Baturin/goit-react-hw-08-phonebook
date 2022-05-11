const getUserName = state => state.auth.user.name;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingUser = state => state.auth.isFetchingUser;

export { getUserName, getIsLoggedIn, getIsFetchingUser };
