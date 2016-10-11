export const fetchByIdentifier = (identifiers: string[]) => {
  console.log(JSON.stringify(identifiers));
  return fetch(
      `http://pcd.dev/configuration/attribute/rest?identifiers=${identifiers.join(',')}`,
    ).then((response: any) => {
      return response.json();
    }
  );
}
