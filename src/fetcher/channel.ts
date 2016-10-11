export const fetchAll = () => {
  return fetch('http://pcd.dev/configuration/channel/rest').then((response) => {
    return response.json();
  });
}


