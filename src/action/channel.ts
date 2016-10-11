import { fetchAll } from 'pim/fetcher/channel'

export const fetchChannelsIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.channels.length) {
    dispatch({type: 'FETCH_CHANNEL_REQUEST'});

    fetchAll().then((channels) => {
      dispatch({type: 'FETCH_CHANNEL_SUCCESS', channels})
    })
  }
}
