export const fetchAll = () => {
  return fetch('http://pcd.dev/configuration/locale/rest').then((response) => {
    return response.json();
  });
}


