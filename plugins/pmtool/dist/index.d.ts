import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';

declare const pmtoolPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const PmtoolPage: () => JSX.Element;

export { PmtoolPage, pmtoolPlugin };
