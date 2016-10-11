export default (state: any = {}, action: any = {}) => {
  switch (action.type) {
    case 'ATTRIBUTE_GROUP_SELECTED':
      return Object.assign({}, state, {selected: action.group})
  }

  return state;
}
