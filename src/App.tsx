import * as React from 'react';
import { connect } from 'react-redux'
import { load } from 'pim/builder/registry'
import build from 'pim/builder/builder'

const ProductView = build('pim/product/edit/form');

class App extends React.Component<any, any> {
  render () {
    return (
      <ProductView />
    );
  }
}

export default App;
