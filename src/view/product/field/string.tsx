import * as React from 'react';
import { Value } from 'pim/model/product/value';
import { Attribute } from 'pim/model/catalog/attribute';

export class view extends React.Component<
  {
    value: Value,
    onFieldChange: any,
    dispatch: any,
    attribute: Attribute
  },
  {}
> {
  fieldChanged = (event: any) => {
    const data = event.currentTarget.value;
    const { value, onFieldChange, attribute } = this.props;

    onFieldChange(Object.assign({}, value, {data}), attribute);
  }

  render() {
    const { value }: { value: Value } = this.props;

    return <input value={ value.data || '' }
      onChange={ this.fieldChanged }
      data-field={ value.code }
      data-locale={ value.locale }
      data-scope={ value.scope }
    />;
  }
}
