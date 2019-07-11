module.exports = {
  // development or production
  mode: 'development',
  // オリジナルソースマップ
  devtool: 'eval-source-map',
  // エントリーポイント
  entry: './src/main.ts',
  // 出力先フォルダ
  output: {
    path: `${__dirname}/public`,
    // 出力ファイル名
    filename: 'main.js'
  },
  module: {
    rules: [
      // Sass
      {
        // 対象となるファイルの拡張子
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // TS
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  //import文で拡張子の省略
  resolve: {
    extensions: ['.ts', '.js', 'json']
  },
  devServer: {
    contentBase: './public',
    port: 8080,
    open: true
  }
}
