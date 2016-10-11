export const fetchByIdentifier = (identifiers: string[]) => {
  console.log(JSON.stringify(identifiers));

  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://pcd.dev/configuration/attribute/rest');
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.send({identifiers});
  })
}
