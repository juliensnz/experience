export const getLabel = (labels: any, locale: string, fallback: string) => {
  return labels[locale] ? labels[locale] : '[' + fallback + ']';
}
