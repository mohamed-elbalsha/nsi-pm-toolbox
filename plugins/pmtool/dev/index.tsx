import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pmtoolPlugin, PmtoolPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pmtoolPlugin)
  .addPage({
    element: <PmtoolPage />,
    title: 'Root Page',
    path: '/pmtool'
  })
  .render();
