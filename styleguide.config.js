const path = require('path');

module.exports = {
  webpackConfig: require('./webpack.config.js'),
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    propFilter: (prop) => {
      const ignoredWithourtDescription = ['className'];
      if (ignoredWithourtDescription.includes(prop.name) && !prop.description) {
        return false;
      }

      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }

      return true;
    },
  }).parse,
  require: [path.join(__dirname, './src/styles/common.scss')],
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import { ${name} } from 'mercuryo-lab';`;
  },
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/*/[A-Z]*.tsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  moduleAliases: {
    '@src': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  },
  // assetsDir: path.resolve(__dirname, 'src/assets'),
  styles: './styleguide.styles.js',
  theme: './styleguide.theme.js',
  styleguideDir: './docs',
};
