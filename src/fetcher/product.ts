export const fetchOne = (id: (number | string)) => {
  return fetch(
    `http://pcd.dev/enrich/product/rest/${id}`
  ).then((product: any) => product.json());
}
