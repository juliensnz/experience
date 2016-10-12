import { fetchAll } from 'pim/fetcher/channel'

export const fetchChannelsIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.channels.length) {
    dispatch({type: 'FETCH_CHANNELS_REQUEST'});

    return fetchAll().then((channels) => {
      dispatch({type: 'FETCH_CHANNELS_SUCCESS', channels});

      return channels;
    })
  }

  return Promise.resolve(getState().catalog.channels);
}
