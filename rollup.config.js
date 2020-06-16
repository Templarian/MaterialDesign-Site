import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';
import copy from 'rollup-plugin-copy'
import { string } from "rollup-plugin-string";
import serve from 'rollup-plugin-serve'
import * as fs from 'fs';
import * as path from 'path';

// This will generate individual JS files
const DIST_COMPONENTS = false;
const BROWSER = 'iife';
const PROD = !process.env.ROLLUP_WATCH;
const TSCONFIG = {
  typescript: require('typescript'),
  tsconfigOverride: {
    compilerOptions: {
      module: "es2015",
      allowSyntheticDefaultImports: true
    }
  }
};

// Append to the inputs any outside your project
// ['./node_modules/foo/src/foo/bar.ts']
const inputs = [];
const entries = [];

const srcDir = path.join(__dirname, 'src');
const namespaces = fs.readdirSync(srcDir)
  .filter((f) => f.match(/^[a-z]+$/) !== null);
namespaces.forEach((namespace) => {
  if (!(namespace === 'site')) {
    return;
  }
  const namespaceDir = path.join(srcDir, namespace);
  const components = fs.readdirSync(namespaceDir)
    .filter((f) => f.match(/^[a-zA-Z0-9]+$/) !== null);
  components.forEach((component) => {
    const componentDir = path.join(namespaceDir, component);
    const file = path.join(componentDir, `${component}.ts`);
    if (fs.existsSync(file)) {
      const name = `${namespace}${component[0].toUpperCase()}${component.substr(1)}`;
      const input = `./src/${namespace}/${component}/${component}.ts`;
      inputs.push(input);
      if (DIST_COMPONENTS) {
        entries.push({
          plugins: [
            resolve(),
            typescript(TSCONFIG),
            string({
              include: '**/*.html'
            }),
            string({
              include: '**/*.css'
            })
          ],
          input,
          output: {
            name: `${name}`,
            file: `./dist/${name}.js`,
            format: BROWSER,
            sourcemap: true
          }
        });
      }
    } else {
      console.error(`Unable to find ${file}!`);
    }
  });
});

const plugins = [
  resolve(),
  typescript(TSCONFIG),
  string({
    include: '**/*.html'
  }),
  string({
    include: '**/*.css'
  }),
  multi(),
  copy({
    targets: [
      { src: 'src/api/*', dest: 'dist/api' },
      { src: 'src/index.html', dest: 'dist' }
    ]
  })
];
if (!PROD) {
  plugins.push(
    serve({
      open: true,
      contentBase: 'dist',
      port: 3000,
      historyApiFallback: true,
      historyApiFallback: '/index.html',
    })
  );
};

export default [
  ...entries,
  {
    input: inputs,
    output: {
      file: './dist/main.js'
    },
    plugins
  }
];