// @ts-check
import {esbuildPlugin} from '@web/dev-server-esbuild';
import {fromRollup} from '@web/dev-server-rollup';

import _commonjs from '@rollup/plugin-commonjs';
import _graphql from '@apollo-elements/rollup-plugin-graphql';

const graphql = fromRollup(_graphql);
const commonjs = fromRollup(_commonjs);

const cjsIncludes = [
    '**/fast-json-stable-stringify/index.js',
    '**/graphql-tag/src/index.js',
    '**/zen-observable/**/*.js',
    '**/bind-decorator/index.js',
];

/** @type {import('@web/test-runner').TestRunnerConfig} */
const config = {
    nodeResolve: true,

    rootDir: '../../',

    files: [
        'test/client/*.test.ts',
    ],

    mimeTypes: {
        '**/*.graphql': 'js',
    },

    testRunnerHtml: testRunnerImport => `
    <html>
      <body>
        <script type="module">
          import '${testRunnerImport}';
        </script>
      </body>
    </html>
  `,

    plugins: [
        graphql(),
        commonjs({include: cjsIncludes}),
        esbuildPlugin({ts: true}),
    ],
};

export default config;
