import * as React from 'react';
import { connect } from 'react-redux'
import { load } from 'pim/builder/registry'
import { builder } from 'pim/builder/builder'

const ChannelView = builder.build('channel');

class App extends React.Component<any, any> {
  render () {
    return (
      <ChannelView />
    );
  }
}

export default App;
