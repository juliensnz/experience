import * as React from 'react';
import { connect } from 'react-redux'
import { load } from 'pim/builder/registry'
import { builder } from 'pim/builder/builder'

const ProductView = builder.build('pim/product/edit/form');

class App extends React.Component<any, any> {
  render () {
    return (
      <ProductView />
    );
  }
}

export default App;
