export const save = (id: (number | string), product: any) => {
  return fetch(
    `http://pcd.dev/enrich/product/rest/${id}`,
    {method: 'POST', body: product}
  ).then((product: any) => product.json());
}
