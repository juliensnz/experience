import modules from './modules'

export const load = (moduleName: string) => {
  return modules[moduleName];
}
