import * as React from 'react';
import { connect } from 'react-redux';

export const view = (props: any) => {
  const { onDelete, item } = props;
  return <div className="delete btn" onClick={() => { onDelete(item) }}>Delete</div>;
}

export const connector = connect(
  (state: any) => {
    return {
      item: state.model.code
    }
  },
  (dispatch: any) => {
    return {
      onDelete: (code: any) => {
        deleteAction(dispatch, code);
      }
    }
  }
);

const deleteAction = (dispatch: any, model: any) => {
  dispatch({type: 'DELETE_REQUEST', model});

  setTimeout(function () {
    dispatch({
      type: 'DELETE_SUCCESS'
    });
  }, 300);
}
