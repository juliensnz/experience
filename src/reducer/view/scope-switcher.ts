export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'FETCH_SCOPE_SUCCESS':
      state = Object.assign({}, state, {scopes: action.scopes});
  }

  return state;
}
