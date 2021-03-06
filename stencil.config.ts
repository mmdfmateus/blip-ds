import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'blip-ds',
  plugins: [
    sass({
      includePaths: ['src/globals'],
      injectGlobalPaths: ['src/globals/app.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'globals', dest: 'styles' }],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  buildEs5: 'prod',
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  testing: {
    timers: 'fake',
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
  },
};
