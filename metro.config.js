const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const config = (() => {
  const {
    resolver: {sourceExts, assetExts},
  } = defaultConfig;
  return {
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      // allows replacing .js|ts files with their .e2e.js|ts equivalent in Detox
      sourceExts: (process.env.RN_SRC_EXT || '')
        .split(',')
        .concat(sourceExts)
        .concat(['svg', 'cjs']),
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
  };
})();

module.exports = mergeConfig(defaultConfig, config);
