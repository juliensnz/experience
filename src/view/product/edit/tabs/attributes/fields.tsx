import * as React from 'react';
import { connect } from 'react-redux';
import { Value } from 'pim/model/product/value';
import { Attribute } from 'pim/model/catalog/attribute';
import { fetchAttributesFromGroupIfNeeded } from 'pim/action/attribute';
import { AttributeGroup } from 'pim/model/catalog/attribute-group';
import { getProductAttributes, getAttribute, getFamily } from 'pim/selector/product/attribute'

export class view extends React.Component<
  {
    dispatch: any,
    currentGroup: string,
    fields: any[],
    childViews: any,
    config: any,
    attributes: {[key: string]: Attribute},
    onFieldChange: any,
    removeAttribute: any
  },
  {}
> {
  componentDidMount() {
    const { dispatch, currentGroup } = this.props;

    dispatch(fetchAttributesFromGroupIfNeeded(currentGroup));
  }

  componentWillReceiveProps(nextProps: any) {
    const { dispatch, currentGroup } = this.props;

    if (nextProps.currentGroup !== currentGroup) {
      dispatch(fetchAttributesFromGroupIfNeeded(nextProps.currentGroup));
    }
  }

  render() {
    const { fields, childViews, config, attributes, onFieldChange, currentGroup, removeAttribute }:
      {
        fields: any[],
        childViews: any,
        config: any,
        attributes: {[key: string]: Attribute},
        currentGroup: string,
        onFieldChange: any,
        removeAttribute: any
      } = this.props;

    const FieldView = childViews.find((view: any) => {
      return config.config.fieldView === view.code
    });
    const valueFields = fields.map((field: any) => {
      return <FieldView.viewModule
        field={field}
        onFieldChange={ onFieldChange }
        removeAttribute={ removeAttribute }
      />;
    }).filter((view: any) => null !== view);

    const container = valueFields ? valueFields : null;

    return <div>{ valueFields }</div>
  }
}

export const connector = connect(
  (state: any) => {
    return {
      fields: getValues(state),
      attributes: state.catalog.attributes,
      currentGroup: state.context.attributeGroup,
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
      },
      removeAttribute: (attributeCode: string) => {
        dispatch({
          type: 'REMOVE_ATTRIBUTE',
          attributeCode
        });
      },
      dispatch
    }
  }
);

const getValues = (state: any) : any[] => {
  if (0 === state.catalog.attributeGroups.length) {
    return [];
  }

  const attributes = getProductAttributes(state).map((attributeCode: string) => {
    return getAttribute(state, attributeCode);
  }).filter((attribute: Attribute) => undefined !== attribute);

  if (!state.model.values) {
    return [];
  }

  return attributes.filter(function(attribute: Attribute) {
      return state.context.attributeGroup === attribute.group_code;
  }).map((attribute: Attribute) => {
    const values = state.model.values[attribute.code]
    const value = values ? state.model.values[attribute.code].find((value: Value) => {
      const locale = null === value.locale || value.locale === state.context.catalogLocale;
      const scope  = null === value.scope || value.scope === state.context.catalogScope;

      return locale && scope;
    }) : null;

    const fieldValue = Object.assign(
      {
        code: attribute.code,
        locale: attribute.localizable ? state.context.catalogLocale : null,
        scope: attribute.scopable ? state.context.catalogScope : null,
        data: null
      },
      value ? value : {}
    );

    return {
      value: fieldValue,
      attribute,
      optionnal: !getFamily(state, state.model.family).attributes.includes(attribute.code)
    }
  });
}

const getCurrentAttributeGroup = (state: any) => {
  return state.catalog.attributeGroups.find((group: AttributeGroup) => {
    return group.code === state.context.attributeGroup;
  })
}

