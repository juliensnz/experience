import * as React from 'react';
import { connect } from 'react-redux';

export const view = (props: any) => {
  const { model, fieldChanged } = props;

  return <div>
    <div>Code: {model.code}</div>
    <div>Label: <input value={model.label} onChange={fieldChanged} data-field="label" type="text" /></div>
    <div>Currencies: <input value={model.currencies || ''} onChange={fieldChanged} data-field="currencies" type="text" /></div>
    <div>Locales: <input value={model.currencies || ''} onChange={fieldChanged} data-field="currencies" type="text" /></div>
    <div>Category tree: <input value={model.currencies || ''} onChange={fieldChanged} data-field="currencies" type="text" /></div>
  </div>;
}

export const connector = connect(
  (state: any) => {
    console.log(state);
    return {
      model: state.model
    }
  },
  (dispatch: any) => {
    return {
      fieldChanged: (event: any) => {
        dispatch({type: 'FIELD_CHANGED', field: event.currentTarget.dataset.field, value: event.currentTarget.value});
      }
    }
  }
);
