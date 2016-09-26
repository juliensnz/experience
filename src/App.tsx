import * as React from "react";
import { connect } from "react-redux"

class App extends React.Component<any, any> {
  render () {
    const { buttonClicked, count } = this.props;
    return (
      <div>
        <h1>Hello, world :)</h1>
        <span>Count: {count}</span>
        <button onClick={buttonClicked}>add</button>
      </div>
    );
  }
}

export default connect(
  (state: any) => {
    return {
      count: state
    };
  },
  (dispatch: any) => {
    return {
      buttonClicked: () => {
        dispatch({type: 'INCREMENT'});
      }
    };
  }
)(App);
