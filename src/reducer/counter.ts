export default (state: number = 0, action: any = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      state = state + 1;
    break;
  }

  return state;
}
