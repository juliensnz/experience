import * as React from 'react';
import { Value } from 'pim/model/product/value';
import { Attribute } from 'pim/model/catalog/attribute';

export const view = (
  { childViews, attribute, field, onFieldChange, removeAttribute }:
  { childViews: any, attribute: Attribute, field: any, onFieldChange: any, removeAttribute: any }
) => {
  const FieldView = childViews.find((view: any) => {
    return view.section &&
      'fields' === view.section &&
      view.attribute_type === field.attribute.field_type;
  });

  if (!FieldView) {
    throw Error(`Cannot find field view for ${field.attribute.field_type} did you registred it properly?`);
  }

  return <div>
    { field.attribute.code }:
    <FieldView.viewModule value={field.value} attribute={field.attribute} onFieldChange={ onFieldChange } />
    { field.optionnal ? <span onClick={ () => { removeAttribute(field.attribute.code) } }>x</span> : null }
  </div>
}
