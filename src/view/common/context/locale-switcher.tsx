import * as React from 'react'
import { connect } from 'react-redux'
import { Locale } from 'pim/model/catalog/locale'

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
      locales: state.views.localeSwitcher.locales ? state.views.localeSwitcher.locales : [],
      locale: state.context.catalogLocale
    };
  },
  (dispatch: any) => {
    return {
      localeSwitched: (locale: string, target: string) => {
        console.log(target);
        dispatch({type: 'LOCALE_SWITCHED', locale, target})
      }
    };
  }
);

const fetchLocalesIfNeeded = () => (dispatch: any, getState: any) => {
  if (!getState().views.localeSwitcher.locales) {
    dispatch({type: 'FETCH_LOCALE_REQUEST'});

    fetch('http://pcd.dev/configuration/locale/rest').then((response) => {
      return response.json();
    }).then((locales) => {
      dispatch({type: 'FETCH_LOCALE_SUCCESS', locales})
    })
  }
}
