//conf file:
/*
{
  'view/channel/channel': 'pim/view/channel/channel',
  'view/common/status': 'pim/view/common/status',
  'view/common/save': 'pim/view/common/save',
}
*/

import * as module_1 from 'pim/view/channel/channel';
import * as module_2 from 'pim/view/common/state-listener';
import * as module_3 from 'pim/view/common/save';
import * as module_4 from 'pim/view/common/delete';
import * as module_5 from 'pim/view/common/tabs';
import * as module_6 from 'pim/view/common/tabs/history';
import * as module_7 from 'pim/view/channel/properties';
import * as module_8 from 'pim/view/channel/properties/general';
import * as module_9 from 'pim/view/channel/properties/conversion';
import * as module_10 from 'pim/view/product/edit/form';
import * as module_11 from 'pim/view/product/edit/tabs/attributes';
import * as module_12 from 'pim/view/product/edit/tabs/categories';
import * as module_13 from 'pim/view/product/edit/tabs/attributes/attribute-group';
import * as module_14 from 'pim/view/common/context/locale-switcher';
import * as module_15 from 'pim/view/common/context/scope-switcher';
import * as module_16 from 'pim/view/product/grid/grid';
import * as module_17 from 'pim/view/product/grid/row';

const map: any = {
  'view/channel/channel': module_1,
  'view/common/state-listener': module_2,
  'view/common/save': module_3,
  'view/common/delete': module_4,
  'view/common/tabs': module_5,
  'view/common/tabs/history': module_6,
  'view/channel/properties': module_7,
  'view/channel/properties/general': module_8,
  'view/channel/properties/conversion': module_9,
  'view/product/edit/form': module_10,
  'view/product/edit/tabs/attributes': module_11,
  'view/product/edit/tabs/categories': module_12,
  'view/product/edit/tabs/attributes/attribute-group': module_13,
  'view/common/context/locale-switcher': module_14,
  'view/common/context/scope-switcher': module_15,
  'view/product/grid/grid': module_16,
  'view/product/grid/row': module_17
}

export default map;