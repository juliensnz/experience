import * as React from 'react';
import { connect } from 'react-redux';
import { childrenForSection } from 'pim/view/util/child';
import { Value } from 'pim/model/product/value'

export const view = ({ values, childViews, onFieldChange }: { values: Value[], childViews: any, onFieldChange: any }) => {
  const valueFields = values.map((value) => {
    return <div>
        { value.code } :
        <input
          value={value.data || ''}
          onChange={ onFieldChange }
          data-field={ value.code }
          data-locale={ value.locale }
          data-scope={ value.scope }
        />
      </div>;
    }
  );

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
      values: getValues(state)
    }
  },
  (dispatch: any) => {
    return {
      onFieldChange: (event: any) => {
        dispatch({
          type: 'FIELD_CHANGED',
          field: event.currentTarget.dataset.field,
          value: event.currentTarget.value,
          locale: event.currentTarget.dataset.locale ? event.currentTarget.dataset.locale : null,
          scope: event.currentTarget.dataset.scope ? event.currentTarget.dataset.scope : null
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
    const values = state.model.values[attributeCode]
    const value = values ? state.model.values[attributeCode].find((value: Value) => {
      const locale = null === value.locale || value.locale === state.context.catalogLocale;
      const scope  = null === value.scope || value.scope === state.context.catalogScope;

      return locale && scope;
    }) : null;

    return Object.assign(
      {
        code: attributeCode,
        locale: null,
        scope: null,
        data: null
      },
      value ? value : {}
    );
  });
}
