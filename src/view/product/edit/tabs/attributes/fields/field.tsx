import * as React from 'react';
import { Value } from 'pim/model/product/value';
import { Attribute } from 'pim/model/catalog/attribute';

export const view = (
  { childViews, attribute, value, onFieldChange }:
  { childViews: any, attribute: Attribute, value: Value, onFieldChange: any }
) => {
  const FieldView = childViews.find((view: any) => {
    return view.section &&
      'fields' === view.section &&
      view.attribute_type === attribute.field_type;
  });

  if (!FieldView) {
    throw Error(`Cannot find field view for ${attribute.field_type} did you registred it properly?`);
  }

  return <div>
    { attribute.code }:
    <FieldView.viewModule value={value} attribute={attribute} onFieldChange={ onFieldChange } />
  </div>
}
