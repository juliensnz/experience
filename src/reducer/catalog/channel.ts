import { Channel } from 'pim/model/catalog/channel'

export default (state: Channel[] = [], action: any = {}) => {
  switch (action.type) {
    case 'FETCH_CHANNELS_SUCCESS':
      state = action.channels;
  }

  return state;
}
