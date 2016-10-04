import { connect } from 'react-redux';
import * as React from 'react';

// declare var require: any;
// require('./save.less');

export const view = (props: any) => {
  const {onSave, model} = props;

  return <div className="save btn" onClick={() => { onSave(model); }}>Save</div>;
}

export const connector = connect(
  (state: any) => {
    return {
      model: state.model
    }
  },
  (dispatch: any) => {
    return {
      onSave: (model: any) => {
        saveAction(dispatch, model);
      }
    }
  }
);

const saveAction = (dispatch: any, model: any) => {
  dispatch({type: 'SAVE_REQUEST', model});

  console.log(model);
  setTimeout(function () {
    if (Math.random() > 0.5) {
      dispatch({
        type: 'SAVE_SUCCESS',
        model
      });
    } else {
      dispatch({
        type: 'SAVE_FAILED',
        errors: {
          code: 'This value is not valid'
        }
      })
    }
  }, 300);
}
