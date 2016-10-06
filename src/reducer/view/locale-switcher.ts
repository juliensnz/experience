export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'FETCH_LOCALE_SUCCESS':
      state = Object.assign({}, state, {locales: action.locales});
  }

  return state;
}
