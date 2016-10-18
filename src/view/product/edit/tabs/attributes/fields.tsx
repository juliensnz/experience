import * as React from 'react';
import { connect } from 'react-redux';
import { Value } from 'pim/model/product/value';
import { Attribute } from 'pim/model/catalog/attribute';
import { fetchAttributesFromGroupIfNeeded } from 'pim/action/attribute';
import { AttributeGroup } from 'pim/model/catalog/attribute-group';

export class view extends React.Component<
  {
    dispatch: any,
    currentGroup: string,
    values: Value[],
    childViews: any,
    config: any,
    attributes: {[key: string]: Attribute},
    onFieldChange: any
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
    const { values, childViews, config, attributes, onFieldChange, currentGroup }:
      { values: Value[], childViews: any, config: any, attributes: {[key: string]: Attribute}, onFieldChange: any, currentGroup: string } = this.props;

    const FieldView = childViews.find((view: any) => {
      return config.config.fieldView === view.code
    });
    const valueFields = values.filter((value: Value) => null !== value).map((value: Value) => {
      const attribute = attributes[value.code];
      if (!attribute) {
        return null;
      }

      return <FieldView.viewModule
        value={value}
        onFieldChange={ onFieldChange }
        attribute={ attribute }
      />;
    }).filter((view: any) => null !== view);

    const container = valueFields ? valueFields : null;

    return <div>{ valueFields }</div>
  }
}

export const connector = connect(
  (state: any) => {
    return {
      values: getValues(state),
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
      dispatch
    }
  }
);

const getValues = (state: any) : Value[] => {
  if (0 === state.catalog.attributeGroups.length) {
    return [];
  }

  const group = getCurrentAttributeGroup(state);

  if (!group) {
    return [];
  }

  if (!state.model.values) {
    return [];
  }

  return group.attributes.map((attributeCode: string) => {
    const attribute = state.catalog.attributes[attributeCode];

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
  }).filter((value: any) => value);
}

const getCurrentAttributeGroup = (state: any) => {
  return state.catalog.attributeGroups.find((group: AttributeGroup) => {
    return group.code === state.context.attributeGroup;
  })
}

