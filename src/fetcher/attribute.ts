export const fetchByIdentifier = (identifiers: string[]) => {
  return fetch(
      `http://pcd.dev/configuration/attribute/rest?identifiers=${identifiers.join(',')}`,
    ).then((response: any) => {
      return response.json();
    }
  );
}
