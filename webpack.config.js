module.exports = function() {
  return {
    entry: "./src/index.jsx",
    devtool: "source-map",
    output: {
      path: __dirname,
      filename: "index.js",
      library: "replot",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: "babel-loader",
          query: {
            "presets": ["es2015", "react"]
          }
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            "presets": ["es2015", "react", "es2015-riot"]
          }
        }
      ]
    }
  }
};
