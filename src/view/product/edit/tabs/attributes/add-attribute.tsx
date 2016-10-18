import * as Select from 'react-select';
import * as React from 'react';
import { connect } from 'react-redux';
import { Family } from 'pim/model/catalog/family';
import { Attribute } from 'pim/model/catalog/attribute';
import { search } from 'pim/fetcher/attribute';

function logChange(val: any) {
  console.log('add attribute');
}

var currentSearch = '';

const getOptions = (input: string, excludedIdentifiers: string[]) => {
  var requestSearch = input;
  currentSearch = input;
  return search(input, {
    limit: 100,
    page: 1,
    locale: 'fr_FR',
    excluded_identifiers: excludedIdentifiers
  }).then((attributes: Attribute[]) => {
    if (currentSearch !== requestSearch) {
      console.log('aborted');
      return null;
    }

    return {
      options: attributes.map((attribute: Attribute) => {
        return {
          value: attribute.code,
          label: attribute.code // use label instead
        }
      }),
      complete: 100 !== attributes.length
    }
  });
};

export class view extends React.Component<
  {
    selected: string[],
    dispatch: any
  },
  {}
> {
  render() {
    const { selected }: {selected: string[]} = this.props;

    return <Select.Async
      value={selected}
      multi={ true }
      loadOptions={ (input: string) => { return getOptions(input, selected) } }
      onChange={ logChange }
    />

  }
}

export const connector = connect(
  (state: any) => {
    console.log(getSelected(state));
    return {
      selected: getSelected(state)
    }
  }
);

const getSelected = (state: any) => {
  const family = state.catalog.families.find((family: Family) => {
    return family.code === state.model.family;
  })

  if (!state.model.values) {
    return [];
  }

  return [...Object.keys(state.model.values), ...family.attributes];
}
