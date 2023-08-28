const context = import.meta.globEager('./Inputs/*.vue');
/**/

const inputsModules = Object.keys(context).map((key) =>
  key.replace(/^\.\/Inputs\/(.*).vue$/, '$1')
);

export const getDynamicComponent = (componentName) => {
  const matchingModule = inputsModules.find(
    (moduleName) => moduleName.toLowerCase() === componentName.toLowerCase()
  );

  if (matchingModule) {
    return context[`./Inputs/${matchingModule}.vue`].default;
  }

  return {
    template: '<div>Component not found</div>',
  };
};