export default (state: string | null = null, action: any = {}) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return action.tab;
  }

  return state;
}
