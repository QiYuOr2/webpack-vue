const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
  // 入口
  entry: ['@babel/polyfill', './src/main.js'],
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].build.js',
  },
  // 解析路径
  resolve: {
    // 设置src别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    //后缀名 可以根据需要自由增减
    extensions: ['.js', '.vue', '.json'],
  },
  // loaders
  module: {
    rules: [
      {
        // *.js
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        loader: 'babel-loader',
      },
      {
        // *.vue
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        // 它会应用到普通的 `.css` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        // 图片
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的文件夹名
      template: 'public/index.html', // 模板html
      favicon: 'public/favicon.ico', // 图标
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // html所在路径
    compress: true, // 是否压缩
    port: 3000, // 端口
    hot: true, // 热部署
    open: true, // 打包完成后自动打开网页
  },
};

module.exports = config;
