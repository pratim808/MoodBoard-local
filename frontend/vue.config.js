const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // This is the correct structure for webpack-dev-server v4+
  devServer: {
    // The watch options are now part of 'client' configuration
    // or can be managed differently, but ignoring files is best done here.
    // Webpack's 'watchOptions' are for the compiler, not the dev server itself.
    // A simpler way is to use 'watchFiles' which is the modern equivalent.
    watchFiles: {
      options: {
        // This tells the watcher to ignore the node_modules directory
        ignored: /node_modules/,
      },
    },
  },
});