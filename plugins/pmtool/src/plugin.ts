import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pmtoolPlugin = createPlugin({
  id: 'pmtool',
  routes: {
    root: rootRouteRef,
  },
});

export const PmtoolPage = pmtoolPlugin.provide(
  createRoutableExtension({
    name: 'PmtoolPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
