const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ... Configuración de empaquetado
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/',
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/Containers/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    }
  },
  module: {
    // ... Lista de reglas respecto a los loaders
    rules: [
      // Reglas para babel
      {
        test: /\.(js|jsx)$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/,

      },
      // Reglas para HTML loader
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      // Reglas para CSS 
      {
        test: /\.(css|s[ac]ss)$/,
        use: [ "style-loader", "css-loader", "sass-loader" ],
      },
      // Reglas para imagenes 
      {
        test: /\.(png|svg|jpg|gif)$/,
        type:'asset'
      }
    ],
  },
  plugins: [
    //... Configuración de plugins
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer:{
    historyApiFallback: true,
  }
};