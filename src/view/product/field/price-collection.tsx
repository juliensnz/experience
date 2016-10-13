import * as React from 'react';
import { Value } from 'pim/model/product/value';
import { Attribute } from 'pim/model/catalog/attribute';
import { Currency } from 'pim/model/catalog/currency';
import { fetchCurrenciesIfNeeded } from 'pim/action/currency'
import { connect } from 'react-redux'

export class view extends React.Component<
  {
    value: Value,
    onFieldChange: any,
    attribute: Attribute,
    dispatch: any,
    currencies: Currency[]
  },
  {}
> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrenciesIfNeeded());
  }

  currencyChanged = (event: any) => {
    const currency = event.currentTarget.dataset.currency;
    const data = event.currentTarget.value;
    const { value, attribute, onFieldChange } = this.props;

    const newData = value.data.filter((oldCurrencyValue: any) => {
      return oldCurrencyValue.currency !== currency;
    });

    const newCurrency = {
      currency,
      data
    }

    onFieldChange(Object.assign({}, value, {data: [...newData, newCurrency]}), attribute);
  }

  render() {
    const {value, onFieldChange, attribute, currencies}:
      {value: Value, onFieldChange: any, attribute: Attribute, currencies: Currency[]} = this.props;
    const currencyFields = Object.keys(currencies).map((currencyCode: string) => {
      const fieldValue = value.data.find((currencyValue: any) => {
        return currencyValue.currency === currencyCode;
      });

      return <div>
        { currencyCode }:
        <input
          value={ fieldValue ? fieldValue.data : '' }
          data-currency={ currencyCode }
          onChange={this.currencyChanged}
        />
      </div>;
    })

    return <div>
      { currencyFields }
    </div>;
  }
}

export const connector = connect(
  (state: any, oldProps: any) => {
    return Object.assign({}, oldProps, {
      currencies: state.catalog.currencies
    });
  },
  (dispatch: any) => {
    return {
      dispatch
    }
  }
);
