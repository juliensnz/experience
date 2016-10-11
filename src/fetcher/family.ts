export const fetchOne = (identifier: string) => {
  return fetch(`http://pcd.dev/configuration/family/rest/${identifier}`).then((response) => {
    return response.json();
  });
}
