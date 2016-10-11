import * as React from 'react'
import { connect } from 'react-redux'
import { Locale } from 'pim/model/catalog/locale'
import { Channel } from 'pim/model/catalog/channel'
import { fetchAll } from 'pim/fetcher/locale'

export class view extends React.Component<
  {dispatch: any, localeSwitched: any, locales: Locale[], locale: string, config: any},
  {}
> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLocalesIfNeeded());
  }

  render() {
    const { locales, locale, localeSwitched, config } = this.props;

    if (null === locales) {
      return <div>Loading...</div>
    }

    const options = locales.map(function (locale) {
      return <option value={ locale.code }>{ locale.label }</option>
    });

    return <select onChange={(event: any) => localeSwitched(event.currentTarget.value, config.config.target)} value={ locale }>
      {options}
    </select>
  }
}

export const connector = connect(
  (state: any) => {
    return {
      locales: getlocales(state),
      locale: state.context.catalogLocale
    };
  },
  (dispatch: any) => {
    return {
      localeSwitched: (locale: string, target: string) => {
        dispatch({type: 'LOCALE_SWITCHED', locale, target})
      }
    };
  }
);

const fetchLocalesIfNeeded = () => (dispatch: any, getState: any) => {
  if (0 === getState().catalog.locales.length) {
    dispatch({type: 'FETCH_LOCALE_REQUEST'});

    fetchAll().then((locales) => {
      dispatch({type: 'FETCH_LOCALE_SUCCESS', locales})
    })
  }
}

const getlocales = (state: any) => {
  const currentChannel: ( Channel | null ) = getCurrentChannel(state);
  return state.catalog.locales && currentChannel ? state.catalog.locales.filter((locale: Locale) => {
    return currentChannel.locales.find((channelLocale: Locale) => {
      return channelLocale.code === locale.code;
    })
  }) : [];
}

const getCurrentChannel = (state: any): (Channel | null) => {
  if (0 === state.catalog.channels.length) {
    return null;
  }

  return state.catalog.channels.find((channel: Channel) => {
    return channel.code === state.context.catalogScope;
  })
}
