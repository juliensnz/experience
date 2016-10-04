export default (state: any = {}, action: any = {}) => {
  if (Object.keys(state).length === 0 && state.constructor === Object) {
    state = {
      "code": "ecommerce",
      "label": "Ecommerce",
      "currencies": [
        "USD",
        "EUR"
      ],
      "locales": [
        {
          "code": "de_DE",
          "label": "German (Germany)",
          "region": "Germany",
          "language": "German"
        },
        {
          "code": "en_US",
          "label": "English (United States)",
          "region": "United States",
          "language": "English"
        },
        {
          "code": "fr_FR",
          "label": "French (France)",
          "region": "France",
          "language": "French"
        }
      ],
      "category": {
        "id": 1,
        "code": "master",
        "labels": {
          "en_US": "Master catalog",
          "de_DE": "Hauptkatalog",
          "fr_FR": "Catalogue principal"
        }
      },
      "conversion_units": ""
    };
  }

  switch (action.type) {
    case 'FIELD_CHANGED':
      state = Object.assign({}, state, {[action.field]: action.value})
    break;
  }

  return state;
}
