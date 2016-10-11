import { connect } from 'react-redux';
import * as React from 'react';

// declare var require: any;
// require('./save.less');

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
        saveAction();
      }
    }
  }
);

// const saveAction = (dispatch: any, model: any) => {
//   dispatch({type: 'SAVE_REQUEST', model});

//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       dispatch({
//         type: 'SAVE_SUCCESS',
//         model
//       });
//     } else {
//       dispatch({
//         type: 'SAVE_FAILED',
//         errors: {
//           code: 'This value is not valid'
//         }
//       })
//     }
//   }, 300);
// }

const saveAction = () => (dispatch: any, getState: any) => {
  if (!getState().views.localeSwitcher.locales) {
    const model = getState().model;

    dispatch({type: 'SAVE_MODEL_REQUEST', model});

    fetch(
      'http://pcd.dev/enrich/product/rest/' + model.meta.id,
      {method: 'POST', body: JSON.stringify(model)}
    ).then((response) => {
      return response.json();
    }).then((locales) => {
      dispatch({type: 'FETCH_LOCALE_SUCCESS', locales})
    })
  }
}
