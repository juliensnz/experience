import * as React from 'react';
import { connect } from 'react-redux';
import { childrenForSection } from 'pim/view/util/child';
import { Value } from 'pim/model/product/value';
import { Attribute } from 'pim/model/catalog/attribute';

export const view = (
  { values, childViews, config, attributes, onFieldChange }:
  { values: Value[], childViews: any, config: any, attributes: Attribute[], onFieldChange: any }
) => {
  const Field = childViews.find((view: any) => {
    return config.config.fieldView === view.code
  });

  const valueFields = values.filter((value: Value) => null !== value).map((value: Value) => {
    const attribute = attributes.find((attribute: Attribute) => attribute.code === value.code);

    if (!attribute) {
      return null;
    }

    return <Field.viewModule
      value={value}
      onFieldChange={ onFieldChange }
      attribute={ attribute }
    />;
  }).filter((view: any) => null !== view);

  const container = valueFields ? valueFields : null;

  return <div>
    {childrenForSection(childViews, 'sidebar')}
    {childrenForSection(childViews, 'context')}
    { valueFields }
  </div>;
}

export const connector = connect(
  (state: any) => {
    return {
      values: getValues(state),
      attributes: state.catalog.attributes
    }
  },
  (dispatch: any) => {
    return {
      onFieldChange: (value: Value, attribute: Attribute) => {
        dispatch({
          type: 'VALUE_UPDATED',
          value,
          attribute
        });
      }
    }
  }
);

const getValues = (state: any) : Value[] => {
  if (0 === state.catalog.attributeGroups.length) {
    return [];
  }

  const group = state.catalog.attributeGroups.find((group: any) => {
    return group.code === state.context.attributeGroup;
  });

  if (!state.model.values) {
    return [];
  }

  return group.attributes.map((attributeCode: string) => {
    const attribute = state.catalog.attributes.find((attribute: Attribute) => attribute.code === attributeCode);

    if (!attribute) {
      return null;
    }

    const values = state.model.values[attributeCode]
    const value = values ? state.model.values[attributeCode].find((value: Value) => {
      const locale = null === value.locale || value.locale === state.context.catalogLocale;
      const scope  = null === value.scope || value.scope === state.context.catalogScope;

      return locale && scope;
    }) : null;

    return Object.assign(
      {
        code: attribute.code,
        locale: attribute.localizable ? state.context.catalogLocale : null,
        scope: attribute.scopable ? state.context.catalogScope : null,
        data: null
      },
      value ? value : {}
    );
  });
}
