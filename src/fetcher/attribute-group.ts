export const fetchAll = () => {
  return fetch('http://pcd.dev/configuration/attribute-group/rest').then((response) => {
    return response.json();
  });
}
