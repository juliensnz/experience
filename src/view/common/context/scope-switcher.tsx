import * as React from 'react'
import { connect } from 'react-redux'
import { Channel } from 'pim/model/catalog/channel'
import { fetchChannelsIfNeeded } from 'pim/action/channel'

export class view extends React.Component<
  {dispatch: any, channelSwitched: any, channels: Channel[], channel: string, config: any},
  {}
> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchChannelsIfNeeded());
  }

  render() {
    const { channels, channel, channelSwitched, config } = this.props;

    if (null === channels) {
      return <div>Loading...</div>
    }

    const options = channels.map(function (channel) {
      return <option value={ channel.code }>{ channel.label }</option>
    });

    return <select onChange={(event: any) => channelSwitched(event.currentTarget.value, config.config.target)} value={ channel }>
      {options}
    </select>
  }
}

export const connector = connect(
  (state: any) => {
    return {
      channels: state.catalog.channels ? state.catalog.channels : [],
      channel: state.context.catalogScope
    };
  },
  (dispatch: any) => {
    return {
      channelSwitched: (channel: string, target: string) => {
        dispatch({type: 'CHANNEL_SWITCHED', channel, target})
      }
    };
  }
);
