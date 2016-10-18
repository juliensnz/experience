import { Attribute } from 'pim/model/catalog/attribute';

let promises: {[key: string]: any} = {};

const baseUrl = 'http://pcd.dev/configuration/attribute/rest';

export const fetchByIdentifier = (identifiers: string[]) => {
  if (0 === identifiers.length) {
    throw new Error('Cannot fetch all attributes');
  }

  // The attribute code allready fetched or currently fetched
  const alreadyFetched = Object.keys(promises);

  // The filtered list of attribute remaining to fetch
  const identifiersToFetch = identifiers.filter((attributeCode: string) => {
    return -1 === alreadyFetched.indexOf(attributeCode);
  });

  // We add unresolved promisses to the promise array.
    identifiersToFetch.forEach((attributeCode: string) => {
      const promise = new Promise(function(resolve, reject){
        promises[attributeCode] = {resolve: resolve, reject: reject};
      });

      promises[attributeCode].promise = promise;
    });

  if (0 !== identifiersToFetch.length) {
    // We fetch them and resolve the corresponding promises
    fetch(
      `${baseUrl}?identifiers=${identifiers.join(',')}`,
    ).then((response: any) => {
      return response.json();
    }).then((attributes: Attribute[]) => {
      attributes.forEach((attribute: Attribute) => {
        promises[attribute.code].resolve(attribute);
      })
    });
  }

  // We wait for all of them to be resolved and we return the complete list
  return Promise.all(identifiers.map((attributeCode: string) => {
    return promises[attributeCode].promise;
  }));
}

export const search = (search: string, options: any) => {
  return fetch(
    `${baseUrl}`,
    {
      method: 'POST',
      body: JSON.stringify({
        search: search,
        options: options
      })
    }
  ).then((response: any) => {
    return response.json();
  }).then((attributes: Attribute[]) => {
    // See how to handle that
    // attributes.forEach((attribute: Attribute) => {
    //   if (!promises[attribute.code]) {
    //     promises[attribute.code] = Promise.resolve(attribute);
    //   } else {
    //     promises[attribute.code].resolve(attribute);
    //   }
    // });

    return attributes;
  });
}
