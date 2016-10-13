const fs = require('fs');

const modules = JSON.parse(fs.readFileSync('src/config/modules.json', 'utf8'));

const imports = Object.keys(modules).map(function (module, index) {
  return `import * as module_${index} from '${modules[module]}';`;
}).reduce((previous, current) => {
  return previous + '\n' + current;
});

const moduleMap = Object.keys(modules).map(function (module, index) {
  return `  '${module}': module_${index},`;
}).reduce((previous, current) => {
  return previous + '\n' + current;
})

const file = `${imports}

const modules: any = {
${moduleMap}
}

export default modules;
`;

fs.writeFile('src/builder/modules.ts', file, function(err) {
  if (err) {
      return console.log(err);
  }

  console.log('Modules were well generated');
});
