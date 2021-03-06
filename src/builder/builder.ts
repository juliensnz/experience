import { load } from 'pim/builder/registry'
import { connect } from 'react-redux';

declare var require: any;
var json = require('pim/config/views.json');

interface ModuleConfiguration {
  code: string,
  targetZone: string,
  view: string | any,
  connector: string | any,
  parent: string | null
}

const build = (moduleName: string) => {
  const moduleConf = json.find((conf: ModuleConfiguration) => {
    return conf.code === moduleName;
  });

  if (undefined === moduleConf) {
    throw Error (`Module ${moduleName} was not found. Are you sure that you registered it well?`);
  }

  const builtView: any     = buildView(() => {}, moduleConf);
  const decoratedView: any = connectView(builtView, moduleConf);
  const injectedView: any  = injectView(decoratedView, json, moduleConf);

  return injectedView;
}

const buildView = (view: any, moduleConf: ModuleConfiguration) => {
  if (typeof moduleConf.view === 'string') {
    const module = load(moduleConf.view);
    view = (undefined === module.view) ? module.default : module.view;
  }

  return view;
}

const connectView = (view: any, config: ModuleConfiguration) => {
  if (typeof config.connector === 'string') {
    const module = load(config.connector);
    const connect = (undefined === module.connector) ? module.default : module.connector;

    view = connect(view);
  }

  return view;
}

const injectView = (view: any, moduleConfs: ModuleConfiguration[], config: ModuleConfiguration) => {
  const childViews = json.filter((conf: ModuleConfiguration) => {
    return conf.parent === config.code;
  }).map((conf: ModuleConfiguration): any => {
    return Object.assign({}, conf, {viewModule: build(conf.code)})
  });

  return connect((state: any, oldProps: any) => {
    return Object.assign({}, oldProps, {childViews, config})
  })(view);
}

export default build;
