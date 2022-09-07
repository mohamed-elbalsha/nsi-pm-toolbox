import { createRouteRef, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "pmtool"
});

const pmtoolPlugin = createPlugin({
  id: "pmtool",
  routes: {
    root: rootRouteRef
  }
});
const PmtoolPage = pmtoolPlugin.provide(
  createRoutableExtension({
    name: "PmtoolPage",
    component: () => import('./esm/index-ba5b7330.esm.js').then((m) => m.ExampleComponent),
    mountPoint: rootRouteRef
  })
);

export { PmtoolPage, pmtoolPlugin };
//# sourceMappingURL=index.esm.js.map
