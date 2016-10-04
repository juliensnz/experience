import * as React from 'react';
import { childrenForSection } from 'pim/view/util/child';

export const view = ({ childViews }: { childViews: any }) => {
  return <div>
    Properties tab content:
    {childrenForSection(childViews, 'container')}
  </div>;
}
