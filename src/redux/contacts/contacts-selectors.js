const getContacts = state => state.contacts.items;

const getIsFetching = state => state.contacts.isFetching;

const getError = state => state.contacts.error;

const getFilter = state => state.filter.value;

export { getContacts, getIsFetching, getError, getFilter };
