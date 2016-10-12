import { connect } from 'react-redux';
import * as React from 'react';

export const view = (props: any) => {
  const {onSave} = props;

  return <div className="save btn" onClick={() => { onSave(); }}>Save</div>;
}

export const connector = connect(
  (state: any) => {
    return {}
  },
  (dispatch: any) => {
    return {
      onSave: () => {
        dispatch(saveAction());
      }
    }
  }
);

const saveAction = () => (dispatch: any, getState: any) => {
  const model = getState().model;
  const id = model.meta.id
  dispatch({type: 'SAVE_MODEL_REQUEST', model});
  delete model.variant_group;
  delete model.meta;

  fetch(
    'http://pcd.dev/enrich/product/rest/' + id,
    {method: 'POST', body: JSON.stringify(model)}
  ).then((response) => {
    return response.json();
  }).then((product) => {
    dispatch({type: 'SAVE_MODEL_SUCCESS', product})
  })
}
