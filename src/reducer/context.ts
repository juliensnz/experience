export default (state: any = {}, action: any = {}) => {
  if (Object.keys(state).length === 0 && state.constructor === Object) {
    state = {
      uiLocale: 'en_US',
      catalogLocale: 'en_US',
      catalogScope: 'mobile',
      attributeGroup: 'marketing'
    };
  }

  switch (action.type) {
    case 'LOCALE_SWITCHED':
      state = Object.assign({}, state, {[action.target]: action.locale})
    break;
    case 'CHANNEL_SWITCHED':
      state = Object.assign({}, state, {[action.target]: action.channel})
    break;
    case 'ATTRIBUTE_GROUP_SELECTED':
      state = Object.assign({}, state, {attributeGroup: action.group})
  }

  return state;
}
