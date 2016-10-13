export const fetchAll = () => {
  return fetch('http://pcd.dev/configuration/currency/rest').then((response) => {
    return response.json();
  });
}


