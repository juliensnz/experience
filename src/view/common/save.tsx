import { connect } from 'react-redux';
import * as React from 'react';

// declare var require: any;
// require('./save.less');

export const view = (props: any) => {
  const {onSave} = props;

  return <div className="save" onClick={() => { onSave(); }}>Save</div>;
}

export const connector = (
  (state: any) => {
    return {}
  },
  (dispatch: any) => {
    return {
      onSave: () => {

      }
    }
  }
);
