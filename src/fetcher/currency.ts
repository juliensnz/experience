var promise: (Promise<any> | null) = null;

export const fetchAll = () => {
  if (null === promise) {
    promise = fetch('http://pcd.dev/configuration/currency/rest').then((response) => {
      return response.json();
    });
  }

  return promise;
}


