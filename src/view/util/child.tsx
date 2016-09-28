import * as React from 'react';

export const childrenForSection = (children: any[], section: string) => {
  return children.filter((child) => {
    return child.section === section;
  }).map((child) => {
    return <child.viewModule />;
  });
}
